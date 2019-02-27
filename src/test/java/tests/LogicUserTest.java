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

import logic.UserService;
import persist.repo.UserInterface;
import util.JSONUtil;

@RunWith(MockitoJUnitRunner.class)
public class LogicUserTest {
	
	@InjectMocks
	private UserService service;
	
	@Mock
	private UserInterface repo;
	
	private static final String MOCK="test";
	
	@Before
	public void setUp() {
		service.setRepo(repo);
	}
	
	@Test
	public void testAddUser() {
		Mockito.when(repo.addUser(MOCK)).thenReturn(MOCK);
		assertEquals(MOCK,service.addUser(MOCK));
	}
	
	@Test
	public void testGetUser() {
		Mockito.when(repo.readUser(1L)).thenReturn(MOCK);
		assertEquals(MOCK,service.readUser(1L));
	}
	
	@Test
	public void testUpdateUser() {
		Mockito.when(repo.updateUser(MOCK,1L)).thenReturn(MOCK);
		assertEquals(MOCK,service.updateUser(MOCK,1L));
	}
	
	@Test
	public void testDeleteUser() {
		Mockito.when(repo.deleteUser(1L)).thenReturn(MOCK);
		assertEquals(MOCK,service.deleteUser(1L));
	}

}
