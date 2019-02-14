package logic;

public interface ServiceImpl {
	String addWord(String word);

	String readWord(String word);

	String updateWord(Long id, String genre);

	String deleteWord(Long id);

}
