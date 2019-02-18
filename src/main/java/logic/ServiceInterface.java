package logic;

public interface ServiceInterface {

	String addWord(String word);

	String readWord(Long id);

	String updateWord(String genre, Long id);

	String deleteWord(Long id);

}
