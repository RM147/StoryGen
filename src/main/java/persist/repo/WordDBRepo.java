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

import logic.Service;
import persist.domain.Words;
import util.JSONUtil;

import okhttp3.OkHttpClient;
import okhttp3.Request;
import okhttp3.Response;
import okhttp3.ResponseBody;

@Transactional(SUPPORTS)
@Default
public class WordDBRepo implements WordRepo {

	@PersistenceContext(unitName = "primary")
	private EntityManager manager;

	@Inject
	private JSONUtil util;

	@Override
	@Transactional(REQUIRED)
	public String addWord(String word) {
		Words aWord = util.getObjectForJSON(word, Words.class);
		manager.persist(aWord);
		return aWord.getWord() + " has been added.";
	}

	@Override
	public String readWord(Long id) {

		return util.getJSONForObject(manager.find(Words.class, id));

	}

	@Override
	public String updateWord(Long id, String genre) {
		if (manager.contains(manager.find(Words.class, id))) {
			manager.find(Words.class, id).setGenre(genre);
			return manager.find(Words.class, id).getWord() + " has been updated.";
		}
		return "No such word.";
	}

	@Override
	@Transactional(REQUIRED)
	public String deleteWord(Long id) {
		if (manager.contains(manager.find(Words.class, id))) {
			manager.remove(manager.find(Words.class, id));
			return manager.find(Words.class, id).getWord() + " has been removed.";
		}
		return "No such word.";
	}

}
