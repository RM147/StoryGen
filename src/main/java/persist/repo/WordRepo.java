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
	
	@Override
	public String addWord(String word) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public String readWord(Long id) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public String updateWord(String genre, Long id) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public String deleteWord(Long id) {
		// TODO Auto-generated method stub
		return null;
	}

}
