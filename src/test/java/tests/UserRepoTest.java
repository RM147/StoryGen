package tests;

import static org.junit.Assert.*;

import java.util.ArrayList;
import java.util.List;

import javax.persistence.EntityManager;
import javax.persistence.Query;

import org.junit.Assert;
import org.junit.Before;
import org.junit.Ignore;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.Mockito;
import org.mockito.runners.MockitoJUnitRunner;

import persist.repo.UserRepo;
import util.JSONUtil;

@RunWith(MockitoJUnitRunner.class)
public class UserRepoTest {
	
	private static final String MOCK_OBJECT = "{\"id\":1,\"username\":\"Rana\",\"secretCode\":\"password\"}";
	
	@InjectMocks
	private UserRepo repo;
	
	@Mock
	EntityManager manager;
	
	@Mock
	private Query query;
	
	private JSONUtil util;
	
	@Before
	public void setUp() {
		repo.setManager(manager);
		util = new JSONUtil();
		repo.setUtil(util);
	}
	
	@Test
	public void testCreate() {
		String reply = repo.addUser(MOCK_OBJECT);
		assertEquals(reply, "Hello Rana you have an account.");

	}
	
	@Test
	public void testRead() {
		
	}
	
	@Test
	public void testUpdate() {
		String reply = repo.updateUser("fantasy",1L);
		assertEquals(reply, "No such user.");
	}
	
	@Test
	public void testDelete() {
		String reply = repo.deleteUser(1L);
		assertEquals(reply, "No such user.");
	}

}
