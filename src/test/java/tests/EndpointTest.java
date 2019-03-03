package tests;

import static org.junit.Assert.assertEquals;

import org.junit.Assert;
import org.junit.Before;
import org.junit.Ignore;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.Mockito;
import org.mockito.runners.MockitoJUnitRunner;

import logic.GeneratorInterface;
import logic.ServiceInterface;
import rest.WordPaths;

@RunWith(MockitoJUnitRunner.class)
public class EndpointTest {

	@InjectMocks
	private WordPaths endpoint;
	
	@Mock
	private ServiceInterface service;
	
	@Mock
	private GeneratorInterface genservice;
	
	private static final String MOCK = "test";
	private static final String MOCK2 = "test2";
	
	@Before
	public void setUp() {
		endpoint.setService(service);
		endpoint.setGenservice(genservice);
	}
	
	@Test
	public void testAddWord() {
		Mockito.when(service.addWord(MOCK2)).thenReturn(MOCK);
		assertEquals(MOCK,service.addWord(MOCK2));
	}
	
	@Test
	public void testGetWord() {
		Mockito.when(service.readWord(1L)).thenReturn(MOCK);
		assertEquals(MOCK,service.readWord(1L));
	}
	
	@Test
	public void testUpdateWord() {
		Mockito.when(service.updateWord(MOCK2,1L)).thenReturn(MOCK);
		assertEquals(MOCK,service.updateWord(MOCK2,1L));
	}
	
	@Test
	public void testDeleteWord() {
		Mockito.when(service.deleteWord(1L)).thenReturn(MOCK);
		assertEquals(MOCK,service.deleteWord(1L));
	}
	
	@Test
	public void testGenStory() {
		Mockito.when(genservice.genStory("")).thenReturn(MOCK);
		assertEquals(MOCK,genservice.genStory(""));
	}
}
