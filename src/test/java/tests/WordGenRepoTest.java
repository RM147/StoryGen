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

import persist.repo.GenRepo;
import persist.repo.WordRepo;
import util.JSONUtil;

import org.junit.Before;
import org.junit.Ignore;
import org.junit.Test;

@RunWith(MockitoJUnitRunner.class)
public class WordGenRepoTest {
	
	@InjectMocks
	private GenRepo repo;
	
	@Mock
	private EntityManager manager;
	
	@Mock
	private Query query;
	
	private static final String MOCK_LIST = "[word]";
	
	@Before
	public void setUp() {
		repo.setManager(manager);
	}
	
	@Test
	public void testGenAdj() {
		Mockito.when(manager.createQuery(Mockito.anyString())).thenReturn(query);
		List<String> adj = new ArrayList<String>();
		adj.add("word");
		Mockito.when(query.setMaxResults(1)).thenReturn(query);
		Mockito.when(query.getResultList()).thenReturn(adj);
		Mockito.when(query.toString()).thenReturn("word");
		assertEquals(MOCK_LIST, repo.genAdj());
	}
	
	@Test
	public void testGenNoun() {
		Mockito.when(manager.createQuery(Mockito.anyString())).thenReturn(query);
		List<String> adj = new ArrayList<String>();
		adj.add("word");
		Mockito.when(query.setMaxResults(1)).thenReturn(query);
		Mockito.when(query.getResultList()).thenReturn(adj);
		Mockito.when(query.toString()).thenReturn("word");
		assertEquals(MOCK_LIST, repo.genNoun());
	}
	
	@Test
	public void testGenSetting() {
		Mockito.when(manager.createQuery(Mockito.anyString())).thenReturn(query);
		List<String> adj = new ArrayList<String>();
		adj.add("word");
		Mockito.when(query.setMaxResults(1)).thenReturn(query);
		Mockito.when(query.getResultList()).thenReturn(adj);
		Mockito.when(query.toString()).thenReturn("word");
		assertEquals(MOCK_LIST, repo.genSetting());
	}
	
	@Test
	public void testGenVerb() {
		Mockito.when(manager.createQuery(Mockito.anyString())).thenReturn(query);
		List<String> adj = new ArrayList<String>();
		adj.add("word");
		Mockito.when(query.setMaxResults(1)).thenReturn(query);
		Mockito.when(query.getResultList()).thenReturn(adj);
		Mockito.when(query.toString()).thenReturn("word");
		assertEquals(MOCK_LIST, repo.genVerb());
	}
	
	@Test
	public void testGenStory() {
		Mockito.when(manager.createQuery(Mockito.anyString())).thenReturn(query);
		List<String> adj = new ArrayList<String>();
		adj.add("word");
		Mockito.when(query.setMaxResults(1)).thenReturn(query);
		Mockito.when(query.getResultList()).thenReturn(adj);
		Mockito.when(query.toString()).thenReturn("word");
		assertEquals("A word word word a word word in a word.",repo.genStory(""));
	}

}
