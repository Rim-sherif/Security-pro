//Affine aglo

function affineEncrypt(text, key1, key2) {
    const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const textLength = text.length;
    let encryptedText = "";

    for (let i = 0; i < textLength; i++) {
      const char = text[i];
      if (char === " ") {
        encryptedText += " ";
        continue;
      }

      const charIndex = alphabet.indexOf(char);
      if (charIndex === -1) {
        encryptedText += char;
        continue;
      }

      const newIndex = (key1 * charIndex + key2) % 26;
      encryptedText += alphabet[newIndex];
    }

    return encryptedText;
  }

  // Function to perform Affine Cipher decryption
  function affineDecrypt(text, key1, key2) {
    const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const textLength = text.length;
    const modInverseA = modInverse(key1, 26); // Calculate the modular inverse of 'a'

    let decryptedText = "";

    for (let i = 0; i < textLength; i++) {
      const char = text[i];
      if (char === " ") {
        decryptedText += " ";
        continue;
      }

      const charIndex = alphabet.indexOf(char);
      if (charIndex === -1) {
        decryptedText += char;
        continue;
      }

      const newIndex = (modInverseA * (charIndex - key2 + 26)) % 26;
      decryptedText += alphabet[newIndex];
    }

    return decryptedText;
  }

  // Function to calculate the modular inverse
  function modInverse(key1, m) {
    for (let x = 1; x < m; x++) {
      if ((key1 * x) % m === 1) {
        return x;
      }
    }
    return -1; // Return -1 if modular inverse doesn't exist
  }

  function performEncryption() {
    const inputText = document.getElementById("inputtext").value.toUpperCase();
    const key1 = parseInt(document.getElementById("key2").value);
    const key2 = parseInt(document.getElementById("key3").value);
    const encryptedText = affineEncrypt(inputText, key1, key2);
    document.getElementById("output").value = encryptedText;
  }

  function performDecryption() {
    const inputText = document.getElementById("inputtext").value.toUpperCase();
    const key1 = parseInt(document.getElementById("key2").value);
    const key2 = parseInt(document.getElementById("key3").value);
    const decryptedText = affineDecrypt(inputText, key1, key2);
    document.getElementById("output").value = decryptedText;
  }







//ceaser algo


function encryptCaesar(message, shift) {
    let result = '';

    for (let i = 0; i < message.length; i++) {
        let char = message[i];

        if (char.match(/[a-zA-Z]/)) {
            let code = message.charCodeAt(i);

            // Uppercase letters
            if (code >= 65 && code <= 90) {
                char = String.fromCharCode(((code - 65 + shift) % 26) + 65);
            }
            // Lowercase letters
            else if (code >= 97 && code <= 122) {
                char = String.fromCharCode(((code - 97 + shift) % 26) + 97);
            }
        }

        result += char;
    }

    return result;
}

// Function to decrypt a message encrypted with the Caesar cipher
function decryptCaesar(message, shift) {
    return encryptCaesar(message, (26 - shift) % 26);
}

// Function to handle encryption button click
function encryptCeaser() {
    const message = document.getElementById('mesg').value;
    const shiftAmount = parseInt(document.getElementById('key10').value);

    const encryptedMessage = encryptCaesar(message, shiftAmount);
    document.getElementById('result').value = encryptedMessage;
}

// Function to handle decryption button click
function decryptCeaser() {
    const encryptedMessage = document.getElementById('mesg').value;
    const shiftAmount = parseInt(document.getElementById('key10').value);
    

    const decryptedMessage = decryptCaesar(encryptedMessage, shiftAmount);
    document.getElementById('result').value = decryptedMessage;
}




//vigenere algo





function vigenereEncrypt() {
    const plaintext = document.getElementById('plainText').value.toLowerCase();
    const key = document.getElementById('key').value.toLowerCase();
    const alphabet = "abcdefghijklmnopqrstuvwxyz";

    let encryptedText = "";
    let keyIndex = 0;

    for (let i = 0; i < plaintext.length; i++) {
        const currentChar = plaintext[i];

        if (alphabet.includes(currentChar)) {
            const plainTextIndex = alphabet.indexOf(currentChar);
            const keyChar = key[keyIndex % key.length];
            const keyIndexInAlphabet = alphabet.indexOf(keyChar);
            const encryptedIndex = (plainTextIndex + keyIndexInAlphabet) % 26;
            encryptedText += alphabet[encryptedIndex];
            keyIndex++;
        } else {
            encryptedText += currentChar;
        }
    }

    document.getElementById('final').value = encryptedText;
}

// Function to decrypt a message encrypted with the Vigenere cipher
function vigenereDecrypt() {
    const ciphertext = document.getElementById('plainText').value.toLowerCase();
    const key = document.getElementById('key').value.toLowerCase();
    const alphabet = "abcdefghijklmnopqrstuvwxyz";

    let decryptedText = "";
    let keyIndex = 0;

    for (let i = 0; i < ciphertext.length; i++) {
        const currentChar = ciphertext[i];

        if (alphabet.includes(currentChar)) {
            const cipherTextIndex = alphabet.indexOf(currentChar);
            const keyChar = key[keyIndex % key.length];
            const keyIndexInAlphabet = alphabet.indexOf(keyChar);
            const decryptedIndex = (cipherTextIndex - keyIndexInAlphabet + 26) % 26;
            decryptedText += alphabet[decryptedIndex];
            keyIndex++;
        } else {
            decryptedText += currentChar;
        }
    }

    document.getElementById('final').value = decryptedText;
}







