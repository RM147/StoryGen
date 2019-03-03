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
	WordRepoTests.class,
	UserRepoTest.class,
})
public class AllTestSuite {

}
