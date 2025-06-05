import random

switchcase=[
    '''
  +---+
  |   |
  O   |
 /|\  |
 / \  |
      |
=========
''', '''
  +---+
  |   |
  O   |
 /|\  |
 /    |
      |
=========
''', '''
  +---+
  |   |
  O   |
 /|\  |
      |
      |
=========
''', '''
  +---+
  |   |
  O   |
 /|   |
      |
      |
=========''', '''
  +---+
  |   |
  O   |
  |   |
      |
      |
=========
''', '''
  +---+
  |   |
  O   |
      |
      |
      |
=========
''', '''
  +---+
  |   |
      |
      |
      |
      |
=========
'''
]

def stage_agruments(argument):
    match argument:
        case 0:
            print(switchcase[0])
        case 1:
            print(switchcase[1])
        case 2:
            print(switchcase[2])
        case 3:
            print(switchcase[3])
        case 4:
            print(switchcase[4])
        case 5:
            print(switchcase[5])
        case _:
            print(switchcase[6])



def file_handle(filename):
    with open(filename, "r") as file:
        content = file.read()
        #seperate word
        words = content.split()
    return words

def main():
    lives=8
    words = file_handle("words.txt")
    chosen_word=random.choice(words)

    print(chosen_word)
    guessed_word=""
    for i in chosen_word:
        guessed_word+="_"
    guessed_word = list(guessed_word)

    while(lives>0):
        
        print("".join(guessed_word))
        guessed_letter=input()
        for i in range(len(chosen_word)):
            if guessed_letter==chosen_word[i]:
                guessed_word[i]=guessed_letter
            else:
                continue
        
        if guessed_letter in chosen_word:
            if "_" in guessed_word:
                continue
            else:
                break
        else:
            lives-=1
            print("".join(guessed_word))
        
        stage_agruments(lives)
    if "_" in guessed_word:
        print("game over u lose!!")
    else:
        print("".join(guessed_word))
        print('you win')
    
    

if __name__ == "__main__":
    main()