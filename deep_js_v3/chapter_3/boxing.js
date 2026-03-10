const name = 'haris';
name.toUpperCase();

/*
'haris' is primitive, but toUpperCase() is method that exists on String.prototype
That's why JS internally does `new String("haris").toUpperCase()
'haris' -> boxing -> String object -> String.prototype -> toUpperCase() -> return result -> object is deleted
*/