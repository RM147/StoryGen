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

import logic.WordService;
import persist.repo.RepoInterface;
import persist.repo.WordRepo;
import util.JSONUtil;

@RunWith(MockitoJUnitRunner.class)
public class LogicServiceTest {
	
	@InjectMocks
	private WordService service;
	
	@Mock
	private RepoInterface repo;
	
	private static final String MOCK= "test";
		
	@Before
	public void setUp() {
		service.setRepo(repo);
	}
	
	@Test
	public void testAddWord() {
		Mockito.when(repo.addWord(MOCK)).thenReturn(MOCK);
		assertEquals(MOCK,service.addWord(MOCK));
	}
	
	@Test
	public void testGetWord() {
		Mockito.when(repo.readWord(1L)).thenReturn(MOCK);
		assertEquals(MOCK,service.readWord(1L));
	}
	
	@Test
	public void testUpdateWord() {
		Mockito.when(repo.updateWord(MOCK,1L)).thenReturn(MOCK);
		assertEquals(MOCK,service.updateWord(MOCK,1L));
	}
	
	@Test
	public void testDeleteWord() {
		Mockito.when(repo.deleteWord(1L)).thenReturn(MOCK);
		assertEquals(MOCK,service.deleteWord(1L));
	}

}
