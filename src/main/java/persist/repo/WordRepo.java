package persist.repo;

import static javax.transaction.Transactional.TxType.REQUIRED;
import static javax.transaction.Transactional.TxType.SUPPORTS;

import java.io.IOException;
import java.lang.reflect.Array;
import java.util.Arrays;
import java.util.Collection;
import java.util.List;
import java.util.stream.Collector;
import java.util.stream.Collectors;

import javax.enterprise.inject.Default;
import javax.inject.Inject;
import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.persistence.Query;
import javax.transaction.Transactional;

import org.apache.log4j.Logger;

import logic.ServiceInterface;
import persist.domain.Word;
import util.JSONUtil;

import okhttp3.OkHttpClient;
import okhttp3.Request;
import okhttp3.Response;
import okhttp3.ResponseBody;


@Transactional(SUPPORTS)
@Default
public class WordRepo implements RepoInterface{

	@PersistenceContext(unitName = "primary")
	private EntityManager manager;
	
	@Inject
	private JSONUtil util;
	
	@Override
	@Transactional(REQUIRED)
	public String addWord(String word) {
		Word aWord = util.getObjectForJSON(word, Word.class);
		manager.persist(aWord);
		return aWord.getWord() + " has been added.";
	}

	@Override
	public String readWord(Long id) {
		return util.getJSONForObject(manager.find(Word.class, id));
	}

	@Override
	@Transactional(REQUIRED)
	public String updateWord(String genre, Long id) {
		if (manager.contains(manager.find(Word.class, id))) {
			manager.find(Word.class, id).setGenre(genre);
			return manager.find(Word.class,id).getWord() + "'s genre has been changed to ";
		}return "No such word.";
			
	}

	@Override
	@Transactional(REQUIRED)
	public String deleteWord(Long id) {
		if (manager.contains(manager.find(Word.class, id))){
			String str = manager.find(Word.class,id).getWord() + " successfully deleted.";
			manager.remove(manager.find(Word.class, id));
			return str;
		}return "No such word.";
		
	}

	public void setManager(EntityManager manager) {
		this.manager = manager;
	}
	
	public void setUtil(JSONUtil util) {
		this.util = util;
	}

}
