package persist.repo;

import java.util.List;

public interface RepoInterface {
	
	String addWord(String word);
	
	String readWord(Long id);
	
	String updateWord(String genre, Long id);
	
	String deleteWord(Long id);
	
	String genStory();

}
