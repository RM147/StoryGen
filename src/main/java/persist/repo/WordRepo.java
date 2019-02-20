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
		return aWord.getWord() + " has been added";
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
			return manager.find(Word.class,id).getWord() + "'s genre has been changed";
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

	@Override
	public String genStory() {
		Query adj = manager.createQuery("Select w.word FROM Word w WHERE category=\'Adjective\' AND genre=\'Fantasy\' OR genre=\'Common\' "
				+ "ORDER BY rand()");
		Query adj1 = manager.createQuery("Select w.word FROM Word w WHERE category=\'Adjective\' AND genre=\'Fantasy\' OR genre=\'Common\' "
				+ "ORDER BY rand()");
		Query setting = manager.createQuery("Select w.word FROM Word w WHERE category=\'Setting\' AND genre=\'Fantasy\' OR genre=\'Common\' "
				+ "ORDER BY rand()");
		Query person1 = manager.createQuery("Select w.word FROM Word w WHERE category=\'Person\' AND genre=\'Fantasy\' OR genre=\'Common\' "
				+ "ORDER BY rand()");
		Query person2 = manager.createQuery("Select w.word FROM Word w WHERE category=\'Person\' AND genre=\'Fantasy\' OR genre=\'Common\' "
				+ "ORDER BY rand()");
		
		String adj2 = adj.setMaxResults(1).getResultList().toString();
		String adj3 = adj1.setMaxResults(1).getResultList().toString();
		String setting1 = setting.setMaxResults(1).getResultList().toString();
		String people = person1.setMaxResults(1).getResultList().toString();
		String people2 = person1.setMaxResults(1).getResultList().toString();
		
		return "A "+adj2+" [noun] [verb] a "+adj3 +" [noun] in a " +setting1 +".";
	}

}
