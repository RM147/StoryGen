package tests;

import org.junit.runner.RunWith;
import org.junit.runners.Suite;
import org.junit.runners.Suite.SuiteClasses;



@RunWith(Suite.class)

@SuiteClasses({
	EndpointTest.class,
	UserEndpointTest.class,
	LogicGenTest.class,
	LogicServiceTest.class,
	LogicUserTest.class,
	WordGenRepoTest.class,
	WordRepoTest.class,
	UserRepoTest.class,
})
public class TestAllSuite {

}
