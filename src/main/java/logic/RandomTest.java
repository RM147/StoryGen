package logic;

import java.util.ArrayList;
import java.util.HashSet;
import java.util.List;
import java.util.Set;
import java.util.concurrent.ThreadLocalRandom;

public class RandomTest {
	int randomNum = 0;
	List<Integer> exclusive = new ArrayList<Integer>();

	public static void main(String[] args) {
		RandomTest r = new RandomTest();
		r.gen(10, 10);
		System.out.println(r.GenTest());

	}

	public String gen(int num, int num2) {
		int i = 0;
		if(num2<num) {
			return "First number must be less than the second number";
		}
		while (i < num) {
			randomNum = ThreadLocalRandom.current().nextInt(1, num2 + 1);
			if(exclusive.size()==num2) {
				return "Out of exclusive numbers";				
			}
			if (!exclusive.contains(randomNum)) {
				exclusive.add(randomNum);
				i++;
			} 
		}return "No issues";
	}

	public boolean GenTest() {
		Set<Integer> set = new HashSet<Integer>(exclusive);
		if (set.size() == exclusive.size()) {
			return true;
		}
		return false;
	}

}
