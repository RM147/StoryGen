package tests;

import static org.junit.Assert.*;

import java.util.Random;

import org.junit.Before;
import org.junit.Ignore;
import org.junit.Test;

import logic.RandomTest;

public class Tests {

	@Before
	public void setUp() {
			
	}

	@Test
	public void randomTest() {
		RandomTest r = new RandomTest();
		assertEquals("First number must be less than the second number",r.gen(11,10));
		r.gen(10,10);
		assertTrue(r.GenTest());
		assertEquals("Out of exclusive numbers", r.gen(1, 10));
	}

}
