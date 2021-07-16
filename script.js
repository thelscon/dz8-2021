'use strict' ;

const person = {

    _name : '' ,
    get name() {
        if( this._name ) return this._name ;
    } ,
    set name ( value ) {
        this._name = value ;
    } ,

    _age : '' ,
    get age() {
        if( this._age ) return this._age ;
    } ,
    set age( value ) {
        if( parseInt( value ) ) {
            value = parseInt( value ) ;
            if( value > 0 && value <= 120 )
                this._age = value ;                
        }
    } ,

    _gander : '' ,
    get gander()  {
        if( this._gander ) return this._gander ;
    } ,
    set gander( value ) {
        value = value   .trim()
                        .toLowerCase() ;
        if(    value === 'male'
            || value === 'female'
            || value === 'non-binary'
            || value === 'transgender'
            || value === 'intersex'
            || value === 'n/a' ) 
            this._gander = value ;
    }

}

person.name = 'Bob' ;
person.age = '  21 age ' ;
person.gander = '  Male' ;

console.log( `name - ${person.name}` ) ;
console.log( `age - ${person.age}` ) ;
console.log( `gander - ${person.gander}` ) ;