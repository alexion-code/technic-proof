export const ValidateSpanishID = (()=> {

  const DNI_REGEX = /^(\d{8})([A-Z])$/;
  const CIF_REGEX = /^([ABCDEFGHJKLMNPQRSUVW])(\d{7})([0-9A-J])$/;
  const NIE_REGEX = /^[XYZ]\d{7,8}[A-Z]$/;

  const ValidateSpanishID = function( str: string ) {

    // Ensure upcase and remove whitespace
    str = str.toUpperCase().replace(/\s/, '');

    let valid = false;
    const type = spainIdType( str );

    switch (type) {
      case 'dni':
        valid = validDNI( str );
        break;
      case 'nie':
        valid = validNIE( str );
        break;
      case 'cif':
        valid = validCIF( str );
        break;
    }

    return {
      type: type,
      valid: valid
    };

  };

  const spainIdType = function( str: string ) {
    if ( str.match( DNI_REGEX ) ) {
      return 'dni';
    }
    if ( str.match( CIF_REGEX ) ) {
      return 'cif';
    }
    if ( str.match( NIE_REGEX ) ) {
      return 'nie';
    }
  };

  const validDNI = ( dni: string ) => {
    const dni_letters: string = "TRWAGMYFPDXBNJZSQVHLCKE";
    const letter: string = dni_letters.charAt( parseInt( dni, 10 ) % 23 );
    
    return letter === dni.charAt(8);
  };

  const validNIE = ( nie: string ) => {

    // Change the initial letter for the corresponding number and validate as DNI
    let nie_prefix: any = nie.charAt( 0 );

    switch (nie_prefix) {
      case 'X': nie_prefix = 0; break;
      case 'Y': nie_prefix = 1; break;
      case 'Z': nie_prefix = 2; break;
    }

    return validDNI( nie_prefix + nie.substring(1) );

  };

  const validCIF = function( cif: string ) {

    const match:any = cif.match( CIF_REGEX );
    const letter  = match[1],
        number  = match[2],
        control = match[3];

    let even_sum: any = 0;
    let odd_sum: any = 0;
    let n;

    for ( let i = 0; i < number.length; i++) {
      n = parseInt( number[i], 10 );

      // Odd positions (Even index equals to odd position. i=0 equals first position)
      if ( i % 2 === 0 ) {
        // Odd positions are multiplied first.
        n *= 2;

        // If the multiplication is bigger than 10 we need to adjust
        odd_sum += n < 10 ? n : n - 9;

      // Even positions
      // Just sum them
      } else {
        even_sum += n;
      }

    }

    var control_digit: any = (10 - (even_sum + odd_sum).toString().slice(-1) );
    var control_letter = 'JABCDEFGHI'.substring( control_digit, control_digit + 1 );

    // Control must be a digit
    if ( letter.match( /[ABEH]/ ) ) {
      return control === control_digit;

    // Control must be a letter
    } else if ( letter.match( /[KPQS]/ ) ) {
      return control === control_letter;

    // Can be either
    } else {
      return control === control_digit || control === control_letter;
    }

  };

  return ValidateSpanishID;
})();