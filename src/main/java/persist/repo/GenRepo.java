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
public class GenRepo implements GenRepoInterface {

	@PersistenceContext(unitName = "primary")
	private EntityManager manager;

	@Override
	public String genAdj() {
		Query query = manager
				.createQuery("Select w.word FROM Word w WHERE category=\'Adjective\' ORDER BY rand()");
		String adj = query.setMaxResults(1).getResultList().toString();
		return adj;
	}

	@Override
	public String genNoun() {
		Query query = manager.createQuery(
				"Select w.word FROM Word w WHERE category=\'Person\' ORDER BY rand()");
		String noun = query.setMaxResults(1).getResultList().toString();
		return noun;
	}

	@Override
	public String genSetting() {
		Query query = manager.createQuery(
				"Select w.word FROM Word w WHERE category=\'Setting\' ORDER BY rand()");
		String setting = query.setMaxResults(1).getResultList().toString();
		return setting;
	}

	@Override
	public String genVerb() {
		Query query = manager.createQuery(
				"Select w.word FROM Word w WHERE category=\'Verb\' ORDER BY rand()");
		String verb = query.setMaxResults(1).getResultList().toString();
		return verb;
	}

	@Override
	public String genStory() {
		String str = "A " + genAdj() + " " + genNoun() + " " + genVerb() + " a " + genAdj() + " " + genNoun() + " in a "
				+ genSetting() + ".";

		str = str.replaceAll("\\[|\\]", "");

		return str;
	}

	public void setManager(EntityManager manager) {
		this.manager = manager;
	}

}
