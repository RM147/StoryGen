package persist.repo;

public interface GenRepoInterface {
	
	String genAdj();
	String genNoun(String genre);
	String genSetting(String genre);
	String genVerb();
	String genStory(String genre);

}
