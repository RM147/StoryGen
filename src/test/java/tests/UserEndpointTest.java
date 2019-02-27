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

import logic.UserService;
import logic.UserServiceInterface;
import rest.UserPaths;

@RunWith(MockitoJUnitRunner.class)
public class UserEndpointTest {
	
	@InjectMocks
	private UserPaths endpoint;
	
	@Mock
	private UserServiceInterface service;
	
	private static final String MOCK = "test";
	private static final String MOCK2 = "test2";
	
	@Before
	public void setUp() {
		endpoint.setService(service);
		
	}
	
	@Test
	public void testAddUser() {
		Mockito.when(service.addUser(MOCK2)).thenReturn(MOCK);
		assertEquals(MOCK,service.addUser(MOCK2));
	}
	
	@Test
	public void testGetUser() {
		Mockito.when(service.readUser(1L)).thenReturn(MOCK);
		assertEquals(MOCK,service.readUser(1L));
	}
	
	@Test
	public void testUpdateUser() {
		Mockito.when(service.updateUser(MOCK2,1L)).thenReturn(MOCK);
		assertEquals(MOCK,service.updateUser(MOCK2,1L));
	}
	
	@Test
	public void testDeleteUser() {
		Mockito.when(service.deleteUser(1L)).thenReturn(MOCK);
		assertEquals(MOCK,service.deleteUser(1L));
	}

}
