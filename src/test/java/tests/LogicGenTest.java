package tests;

import static org.junit.Assert.assertEquals;

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

import logic.GeneratorService;
import persist.repo.GenRepoInterface;

@RunWith(MockitoJUnitRunner.class)
public class LogicGenTest {
	
	@InjectMocks
	private GeneratorService service;
	
	@Mock
	private GenRepoInterface repo;
	
	private static final String MOCK = "test";
	
	@Before
	public void setUp() {
		service.setRepo(repo);
	}
	
	@Test
	public void testGenAdj() {
		Mockito.when(service.genAdj()).thenReturn(MOCK);
		assertEquals(MOCK,service.genAdj());
	}
	
	@Test
	public void testGenNoun() {
		Mockito.when(service.genNoun("")).thenReturn(MOCK);
		assertEquals(MOCK,service.genNoun(""));
	}
	
	@Test
	public void testGenSetting() {
		Mockito.when(service.genSetting("")).thenReturn(MOCK);
		assertEquals(MOCK,service.genSetting(""));
	}
	
	@Test
	public void testGenVerb() {
		Mockito.when(service.genVerb()).thenReturn(MOCK);
		assertEquals(MOCK,service.genVerb());
	}
	
	@Test
	public void testGenStory() {
		Mockito.when(service.genStory("")).thenReturn(MOCK);
		assertEquals(MOCK,service.genStory(""));
	}

}
