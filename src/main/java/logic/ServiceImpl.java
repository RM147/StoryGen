package logic;

public interface ServiceImpl {
	String addWord(String word);

	String readWord(Long id);

	String updateWord(Long id, String genre);

	String deleteWord(Long id);

}
