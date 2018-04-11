# Stack Perfeita

* redux
* react-router-dom
* react-redux
* redux-saga
* reselect
* axios
* recompose

# Redux e Saga
Para ambos o que sempre vai existir é a action, pois ela é importante para qualquer um dos casos.

Não pode existir uma saga e um reducer escutando o mesmo nome de action

# Recompose

Uma caixa de ferramentas de hocs.

Mais utilizados: 

## compose 

Agrupa várias hocs em uma só facilitando assim a utilização e verbosidade de código

```javascript
const enhance = compose(
  withState('counter', 'setCounter', 0),
  connect()
);
```

## withState()

```javascript
withState(
  stateName: string,
  stateUpdaterName: string,
  initialState: any | (props: Object) => any
): HigherOrderComponent
```

**Utilizando: 

```javascript
const enhance = compose(
  withState('counter', 'setCounter', 0);
);
```


## withHandler()

Hoc para enviar funções para dentro de um componente ex: 

```javascript
const addCounting = compose(
  withState('counter', 'setCounter', 0),
  withHandlers({
    increment: ({ setCounter }) => () => setCounter(n => n + 1),
    decrement: ({ setCounter }) => () =>  setCounter(n => n - 1),
    reset: ({ setCounter }) => () => setCounter(0)
  })
)
```

No script acima estamos setando um estado counter uma ação setCounter e um valor default como 0

Quando chamado o método incremente pegamos do props o setCounter e estamos chando o mesmo para incrementar 1 ou decrementar 1


## lifecycle()

Utilizado quando queremos utilizar os ciclo de vida do react em um pure componente, muito útil para alguns controles especificos

ex: 

```javascript
const PostsList = ({ posts }) => (
  <ul>{posts.map(p => <li>{p.title}</li>)}</ul>
)

const PostsListWithData = lifecycle({
  componentDidMount() {
    fetchPosts().then(posts => {
      this.setState({ posts });
    })
  }
})(PostsList);
```


## withPropsOnChange

Essa hoc é executada quando uma prop especifica é alterada.

```javascript
const enhance = compose(
  withState('counter', 'setCounter', 0),
  withPropsOnChange(
    ['counter'],
    props => {
      setTimeout(() => {
        //Soma duas vezes
        props.counter +1
      })
    }
  ),
);

```

Caso o counter seja alterado por algum motivo ele irá invocar o propsOnChange e somar mais 1


## onlyUpdateForKeys()

responsável por gerenciar a atualização do componente, ex:

Quando atualizamos qualquer props dentro do componente o nosso metodo render é chamado.

Com o onlyUpdateForKeys ele irá atualizar o componente somente a prop alterada for a definida

```javascript
const enhance = compose(
  withState('counter', 'setCounter', 0),
  withState('title', 'setTitle', ''),
  onlyUpdateForKeys(['title'])
```

Só será atualizado se o prop atualizado for o title.


