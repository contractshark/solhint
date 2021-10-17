const config = {
    rules :{
        'code-complexity':'off',
'function-max-lines':'off',
'max-line-length':'warn',
'max-states-count':'off',
'no-empty-blocks':'off',
'no-unused-vars':'off',
'payable-fallback':'off',
'reason-string':'off',
'constructor-syntax':'error',
'quotes':'off',
'const-name-snakecase':'off',
'contract-name-camelcase':'off',
'event-name-camelcase':'off',
'func-name-mixedcase':'off',
'func-param-name-mixedcase':'off',
'modifier-name-mixedcase':'off',
'private-vars-leading-underscore':'off',
'use-forbidden-name':'off',
'var-name-mixedcase':'off',
'func-order':'off',
'imports-on-top':'off',
'visibility-modifier-order':'off',
'ordering':'off',
'avoid-call-value':'off',
'avoid-low-level-calls':'off',
'avoid-sha3':'off',
'avoid-suicide':'off',
'avoid-throw':'off',
'avoid-tx-origin':'off',
'check-send-result':'off',
'compiler-version':'off',
'func-visibility':'off',
'mark-callable-contracts':'off',
'multiple-sends':'off',
'no-complex-fallback':'off',
'no-inline-assembly':'off',
'not-rely-on-block-hash':'off',
'not-rely-on-time':'off',
'reentrancy':'off',
'state-visibility':'off',
    }
}
const { sohintStr } =require('../lib')

const srcContent = `
pragma solidity ^0.4.24;

contract HelloWorld {

    string saySomething;

    constructor() public  {
        saySomething = "Hello World!";
    }

    function speak() public constant returns(string itSays) {
        return saySomething;
    }

    function saySomethingElse(string newSayingthisvariableissolongthatshouldbedetectedandwarning) public  returns(bool success) {
        saySomething = newSaying;
        return true;
    }

}
`


!(() =>{``
    let report = sohintStr(srcContent, config, "test.sol")
    console.log(report)
})()