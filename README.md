# android-native-module-example

Normalmente, um módulo nativo é uma classe Java que extende a classe _ReactContextBaseJavaModule_ e implementa a funcionalidade requisitada pelo JavaScript.

_ReactContextBaseJavaModule_ exige a implementação do método _getName_. Um método opcional chamado _getConstants_ retorna os valores constantes expostos ao JavaScript e sua implementação não é obrigatória, mas pode ser muito útil para a utilização de valores pré definidos que serão usados na comunicação entre o Java e o JavaScript.

Para expor o método criado para o JavaScript, é preciso utilizar a annotation *@ReactMethod*. O tipo de retorno do método é sempre _void_, pois a ponte entre o código React e o nativo é assíncrona. A única forma de passar um resultado para o JavaScript é utilizando callbacks ou emitindo eventos.

Os seguintes tipos de retorno são suportados nos métodos anotados com @ReactMethod e são mapeados automaticamente para tipos equivalentes em JavaScript:

```
Boolean -> Bool
Integer -> Number
Double -> Number
Float -> Number
String -> String
Callback -> function
ReadableMap -> Object
ReadableArray -> Array
```

É preciso registrar o módulo nativo criado e para isso deve ser criado uma nova classe Java (um pacote) que implementa ReactPackage. Dentro desta classe, é preciso adicionar o novo módulo à lista de módulos nativos da aplicação. O pacote precisa ser fornecido no método getPackages do arquivo **MainApplication.java**.

Para facilitar o acesso à nova funcionalidade criada, é comum mapear o módulo nativo criado em um módulo JavaScript. Isso não é necessário, mas evita que os consumidores de sua biblioteca tenham que importar o **NativeModules** toda vez. Esse arquivo JavaScript criado também é um bom lugar para adicionar qualquer funcionalidade JavaScript que precisar.

Depois disso, basta importar o módulo JavaScript quando necessário e utilizar os métodos nativos que foram expostos ao JavaScript graças à annotation *@ReactMethod*.
