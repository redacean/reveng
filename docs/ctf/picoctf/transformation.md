# Transformation

Hello fellow hackers, time to capture the flag! In this challenge we are provided with a file `enc` and a line of python code `''.join([chr((ord(flag[i]) << 8) + ord(flag[i + 1])) for i in range(0, len(flag), 2)])`.

I first thought the `enc` file was an executable but running the `file` command proved me wrong. Looking at the content of the file shows UTF-8 encoded characters. I unfortunately do not speak mandarin so I asked our friend google translate but it did not seem to be able to make sense of it either.

```bash
$ file enc
enc: Unicode text, UTF-8 text, with no line terminators
$ cat enc
灩捯䍔䙻ㄶ形楴獟楮獴㌴摟潦弸彤㔲挶戹㍽
```

Let's analyse the python code provided. We can confidently assume this was the code used to encrypt the flag and we're asked to analyse the code to recover the flag from the result. The code does the following:

- iterates through the flag string 2 characters by 2 characters,
- at each iterations it converts the characters to numbers and calculates the sum of:
  - the product of the first element and 256 (shifts its bits by 8 bits to the left) and
  - the second element, and
  - converts the result back to char
- joins the result to the encoded flag string

Assuming the flag only contains ASCII characters, the code essentially stores two characters of 8 bits each into 16 bits. Reversing it requires some simple bit manipulation:

```python
fname = "enc"

with open(fname, 'r') as file:
    content = file.read() # stores file content as string
    flag_el = []
    for i in range(0, len(content)):
        el1 = ord(content[i]) >> 8 # replaces the first 8 bits by the last 8 bits
        el2 = ord(content[i]) & 255 # removes the last 8 bits
        flag_el.append(chr(el1))
        flag_el.append(chr(el2))
    flag = ''.join(flag_el)
    print(flag)
```

And it worked! Feel free to checkout my social links in the footer below. See you in the next one!
