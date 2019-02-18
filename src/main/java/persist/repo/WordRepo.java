package persist.repo;

public interface WordRepo {
	String addWord(String word);

	String readWord(Long id);

	String updateWord(Long id, String genre);

	String deleteWord(Long id);

}
