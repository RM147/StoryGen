package persist.repo;

public interface WordRepo {
	String addWord(String word);

	String readWord(String word);

	String updateWord(Long id, String genre);

	String deleteWord(Long id);

}
