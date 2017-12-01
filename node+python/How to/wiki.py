#import sys,wikipedia
#print wikipedia.summary("Convolutional neural network", sentences=1)

#import
import sys, json, wikipedia

#read data from stdin
def read_in():
	lines = sys.stdin.readlines()
	return json.loads(lines[0])
def main():
	title = read_in()
	print wikipedia.summary(title, sentences=1)

if __name__ == '__main__':
	main()