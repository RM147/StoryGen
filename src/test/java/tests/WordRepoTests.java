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

import persist.repo.WordRepo;
import util.JSONUtil;

import org.junit.Before;
import org.junit.Ignore;
import org.junit.Test;

@RunWith(MockitoJUnitRunner.class)
public class WordRepoTests {
	
	private static final String MOCK_OBJECT = "{\"id\":1,\"word\":\"Heroic\",\"category\":\"Adjective\",\"genre\":\"Common\"}";

	@InjectMocks
	private WordRepo repo;
	
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
		String reply = repo.addWord(MOCK_OBJECT);
		assertEquals(reply, "Heroic has been added.");

	}
	
	@Test
	public void testRead() {
		
	}
	
	@Test
	public void testUpdate() {
		String reply = repo.updateWord("fantasy",1L);
		assertEquals(reply, "No such word.");
	}
	
	@Test
	public void testDelete() {
		String reply = repo.deleteWord(1L);
		assertEquals(reply, "No such word.");
	}

}
