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
import persist.domain.Users;
import persist.domain.Word;
import util.JSONUtil;

import okhttp3.OkHttpClient;
import okhttp3.Request;
import okhttp3.Response;
import okhttp3.ResponseBody;

@Transactional(SUPPORTS)
@Default
public class UserRepo implements UserInterface{
	
	@PersistenceContext(unitName="primary")
	private EntityManager manager;
	
	@Inject
	private JSONUtil util;

	@Override
	@Transactional(REQUIRED)
	public String addUser(String user) {
		Users aUser = util.getObjectForJSON(user, Users.class);
		manager.persist(aUser);
		return "Hello "+ aUser.getUsername() +"you have an account.";
	}

	@Override
	public String readUser(Long id) {
		return util.getJSONForObject(manager.find(Users.class, id));
	}

	@Override
	@Transactional(REQUIRED)
	public String updateUser(String pass, Long id) {
		if (manager.contains(manager.find(Users.class, id))) {
			manager.find(Users.class, id).setSecretCode(pass);
			return manager.find(Users.class,id).getUsername() + "'s password has been changed";
		}return "No such user.";
	}

	@Override
	@Transactional(REQUIRED)
	public String deleteUser(Long id) {
		if (manager.contains(manager.find(Users.class, id))){
			String str = manager.find(Users.class,id).getUsername() + " successfully deleted.";
			manager.remove(manager.find(Users.class, id));
			return str;
		}return "No such user.";
	}

}
