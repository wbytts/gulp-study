/*
"off" or 0 - 关闭规则
"warn" or 1 - 将规则视为一个警告（不会影响退出码）
"error" or 2 - 将规则视为一个错误 (退出码为1)
*/

module.exports = {
  parserOptions: {
    //  默认设置为 3，5（默认）， 你可以使用 6、7、8、9 或 10 来指定你想要使用的 ECMAScript 版本。
    // 你也可以用使用年份命名的版本号指定为 2015（同 6），2016（同 7），或 2017（同 8）或 2018（同 9）或 2019 (same as 10)
    ecmaVersion: 6,
    // 设置为 "script" (默认) 或 "module"（如果你的代码是 ECMAScript 模块)。
    sourceType: 'module',
    // 这是个对象，表示你想使用的额外的语言特性
    ecmaFeatures: {
      globalReturn: false, // 允许在全局作用域下使用 return 语句
      impliedStrict: false, // 启用全局 strict mode (如果 ecmaVersion 是 5 或更高)
      jsx: true, //  启用 JSX
      // 启用实验性的 object rest/spread properties 支持。
      // (重要：这是一个实验性的功能,在未来可能会有明显改变。 建议你写的规则 不要 依赖该功能，除非当它发生改变时你愿意承担维护成本。)
      experimentalObjectRestSpread: false,
    },
  },
  rules: {
    // ########## Possible Errors
    // 强制 “for” 循环中更新子句的计数器朝着正确的方向移动
    'for-direction': 'off',
    // 强制 getter 函数中出现 return 语句
    'getter-return': 'off',
    // 禁止使用异步函数作为 Promise executor
    'no-async-promise-executor': 'off',
    // 禁止在循环中出现 await
    'no-await-in-loop': 'off',
    // 禁止与 -0 进行比较
    'no-compare-neg-zero': 'off',
    // 禁止条件表达式中出现赋值操作符
    'no-cond-assign': 'off',
    // 禁用 console
    'no-console': 'off',
    // 禁止在条件中使用常量表达式
    'no-constant-condition': 'off',
    // 禁止在正则表达式中使用控制字符
    'no-control-regex': 'off',
    // 禁用 debugger
    'no-debugger': 'off',
    // 禁止 function 定义中出现重名参数
    'no-dupe-args': 'off',
    // 禁止对象字面量中出现重复的 key
    'no-dupe-keys': 'off',
    // 禁止出现重复的 case 标签
    'no-duplicate-case': 'off',
    // 禁止出现空语句块
    'no-empty': 'off',
    // 禁止在正则表达式中使用空字符集
    'no-empty-character-class': 'off',
    // 禁止对 catch 子句的参数重新赋值
    'no-ex-assign': 'off',
    // 禁止不必要的布尔转换
    'no-extra-boolean-cast': 'off',
    // 禁止不必要的括号
    'no-extra-parens': 'off',
    // 禁止不必要的分号
    'no-extra-semi': 'off',
    // 禁止对 function 声明重新赋值
    'no-func-assign': 'off',
    // 禁止在嵌套的块中出现变量声明或 function 声明
    'no-inner-declarations': 'off',
    // 禁止 RegExp 构造函数中存在无效的正则表达式字符串
    'no-invalid-regexp': 'off',
    // 禁止不规则的空白
    'no-irregular-whitespace': 'off',
    // 不允许在字符类语法中出现由多个代码点组成的字符
    'no-misleading-character-class': 'off',
    // 禁止把全局对象作为函数调用
    'no-obj-calls': 'off',
    // 禁止直接调用 Object.prototypes 的内置属性
    'no-prototype-builtins': 'off',
    // 禁止正则表达式字面量中出现多个空格
    'no-regex-spaces': 'off',
    // 禁用稀疏数组
    'no-sparse-arrays': 'off',
    // 禁止在常规字符串中出现模板字面量占位符语法
    'no-template-curly-in-string': 'off',
    // 禁止出现令人困惑的多行表达式
    'no-unexpected-multiline': 'off',
    // 禁止在 return、throw、continue 和 break 语句之后出现不可达代码
    'no-unreachable': 'off',
    // 禁止在 finally 语句块中出现控制流语句
    'no-unsafe-finally': 'off',
    // 禁止对关系运算符的左操作数使用否定操作符
    'no-unsafe-negation': 'off',
    // 禁止由于 await 或 yield的使用而可能导致出现竞态条件的赋值
    'require-atomic-updates': 'off',
    // 要求使用 isNaN() 检查 NaN
    'use-isnan': 'off',
    // 强制 typeof 表达式与有效的字符串进行比较
    'valid-typeof': 'off',

    // ########## Best Practices
    // 强制 getter 和 setter 在对象中成对出现
    'accessor-pairs': 'off',
    // 强制数组方法的回调函数中有 return 语句
    'array-callback-return': 'off',
    // 强制把变量的使用限制在其定义的作用域范围内
    'block-scoped-var': 'off',
    // 强制类方法使用 this
    'class-methods-use-this': 'off',
    // 指定程序中允许的最大环路复杂度
    'complexity': 'off',
    // 要求 return 语句要么总是指定返回的值，要么不指定
    'consistent-return': 'off',
    // 强制所有控制语句使用一致的括号风格
    'curly': 'off',
    // 要求 switch 语句中有 default 分支
    'default-case': 'off',
    // 强制在点号之前和之后一致的换行
    'dot-location': 'off',
    // 强制尽可能地使用点号
    'dot-notation': 'off',
    // 要求使用 === 和 !==
    'eqeqeq': 'off',
    // 要求 for-in 循环中有一个 if 语句
    'guard-for-in': 'off',
    // 强制每个文件中包含的的类的最大数量
    'max-classes-per-file': 'off',
    // 禁用 alert、confirm 和 prompt
    'no-alert': 'off',
    // 禁用 arguments.caller 或 arguments.callee
    'no-caller': 'off',
    // 不允许在 case 子句中使用词法声明
    'no-case-declarations': 'off',
    // 禁止除法操作符显式的出现在正则表达式开始的位置
    'no-div-regex': 'off',
    // 禁止 if 语句中 return 语句之后有 else 块
    'no-else-return': 'off',
    // 禁止出现空函数
    'no-empty-function': 'off',
    // 禁止使用空解构模式
    'no-empty-pattern': 'off',
    // 禁止在没有类型检查操作符的情况下与 null 进行比较
    'no-eq-null': 'off',
    // 禁用 eval()
    'no-eval': 'off',
    // 禁止扩展原生类型
    'no-extend-native': 'off',
    // 禁止不必要的 .bind() 调用
    'no-extra-bind': 'off',
    // 禁用不必要的标签
    'no-extra-label': 'off',
    // 禁止 case 语句落空
    'no-fallthrough': 'off',
    // 禁止数字字面量中使用前导和末尾小数点
    'no-floating-decimal': 'off',
    // 禁止对原生对象或只读的全局对象进行赋值
    'no-global-assign': 'off',
    // 禁止使用短符号进行类型转换
    'no-implicit-coercion': 'off',
    // 禁止在全局范围内使用变量声明和 function 声明
    'no-implicit-globals': 'off',
    // 禁止使用类似 eval() 的方法
    'no-implied-eval': 'off',
    // 禁止 this 关键字出现在类和类对象之外
    'no-invalid-this': 'off',
    // 禁用 __iterator__ 属性
    'no-iterator': 'off',
    // 禁用标签语句
    'no-labels': 'off',
    // 禁用不必要的嵌套块
    'no-lone-blocks': 'off',
    // 禁止在循环语句中出现包含不安全引用的函数声明
    'no-loop-func': 'off',
    // 禁用魔术数字
    'no-magic-numbers': 'off',
    // 禁止使用多个空格
    'no-multi-spaces': 'off',
    // 禁止使用多行字符串
    'no-multi-str': 'off',
    // 禁止使用 new 以避免产生副作用
    'no-new': 'off',
    // 禁止对 Function 对象使用 new 操作符
    'no-new-func': 'off',
    // 禁止对 String，Number 和 Boolean 使用 new 操作符
    'no-new-wrappers': 'off',
    // 禁用八进制字面量
    'no-octal': 'off',
    // 禁止在字符串中使用八进制转义序列
    'no-octal-escape': 'off',
    // 禁止对 function 的参数进行重新赋值
    'no-param-reassign': 'off',
    // 禁用 __proto__ 属性
    'no-proto': 'off',
    // 禁止多次声明同一变量
    'no-redeclare': 'off',
    // 禁止使用对象的某些属性
    'no-restricted-properties': 'off',
    // 禁止在 return 语句中使用赋值语句
    'no-return-assign': 'off',
    // 禁用不必要的 return await
    'no-return-await': 'off',
    // 禁止使用 javascript: url
    'no-script-url': 'off',
    // 禁止自我赋值
    'no-self-assign': 'off',
    // 禁止自身比较
    'no-self-compare': 'off',
    // 禁用逗号操作符
    'no-sequences': 'off',
    // 禁止抛出异常字面量
    'no-throw-literal': 'off',
    // 禁用一成不变的循环条件
    'no-unmodified-loop-condition': 'off',
    // 禁止出现未使用过的表达式
    'no-unused-expressions': 'off',
    // 禁用出现未使用过的标
    'no-unused-labels': 'off',
    // 禁止不必要的 .call() 和 .apply()
    'no-useless-call': 'off',
    // 禁止不必要的 catch 子句
    'no-useless-catch': 'off',
    // 禁止不必要的字符串字面量或模板字面量的连接
    'no-useless-concat': 'off',
    // 禁用不必要的转义字符
    'no-useless-escape': 'off',
    // 禁止多余的 return 语句
    'no-useless-return': 'off',
    // 禁用 void 操作符
    'no-void': 'off',
    // 禁止在注释中使用特定的警告术语
    'no-warning-comments': 'off',
    // 禁用 with 语句
    'no-with': 'off',
    // 建议在正则表达式中使用命名捕获组
    'prefer-named-capture-group': 'off',
    // 要求使用 Error 对象作为 Promise 拒绝的原因
    'prefer-promise-reject-errors': 'off',
    // 强制在 parseInt() 使用基数参数
    'radix': 'off',
    // 禁止使用不带 await 表达式的 async 函数
    'require-await': 'off',
    // 强制在 RegExp 上使用 u 标志
    'require-unicode-regexp': 'off',
    // 要求所有的 var 声明出现在它们所在的作用域顶部
    'vars-on-top': 'off',
    // 要求 IIFE 使用括号括起来
    'wrap-iife': 'off',
    // 要求或禁止 “Yoda” 条件
    'yoda': 'off',

    // ########## Strict Mode
    // 要求或禁止使用严格模式指令
    'strict': 'off',

    // ########## Variables
    // 要求或禁止 var 声明中的初始化
    'init-declarations': 'off',
    // 禁止删除变量
    'no-delete-var': 'off',
    // 不允许标签与变量同名
    'no-label-var': 'off',
    // 禁用特定的全局变量
    'no-restricted-globals': 'off',
    // 禁止变量声明与外层作用域的变量同名
    'no-shadow': 'off',
    // 禁止将标识符定义为受限的名字
    'no-shadow-restricted-names': 'off',
    // 禁用未声明的变量，除非它们在 /*global */ 注释中被提到
    'no-undef': 'off',
    // 禁止将变量初始化为 undefined
    'no-undef-init': 'off',
    // 禁止将 undefined 作为标识符
    'no-undefined': 'off',
    // 禁止出现未使用过的变量
    'no-unused-vars': 'off',
    // 禁止在变量定义之前使用它们
    'no-use-before-define': 'off',

    // ########## Node.js and CommonJS
    // 强制数组方法的回调函数中有 return 语句
    'callback-return': 'off',
    // 要求 require() 出现在顶层模块作用域中
    'global-require': 'off',
    // 要求回调函数中有容错处理
    'handle-callback-err': 'off',
    // 禁用 Buffer() 构造函数
    'no-buffer-constructor': 'off',
    // 禁止混合常规变量声明和 require 调用
    'no-mixed-requires': 'off',
    // 禁止调用 require 时使用 new 操作符
    'no-new-require': 'off',
    // 禁止对 __dirname 和 __filename 进行字符串连接
    'no-path-concat': 'off',
    // 禁用 process.env
    'no-process-env': 'off',
    // 禁用 process.exit()
    'no-process-exit': 'off',
    // 禁用通过 require 加载的指定模块
    'no-restricted-modules': 'off',
    // 禁用同步方法
    'no-sync': 'off',

    // ########## Stylistic Issues
    // 在数组开括号后和闭括号前强制换行
    'array-bracket-newline': 'off',
    // 强制数组方括号中使用一致的空格
    'array-bracket-spacing': 'off',
    // 强制数组元素间出现换行
    'array-element-newline': 'off',
    // 禁止或强制在代码块中开括号前和闭括号后有空格
    'block-spacing': 'off',
    // 强制在代码块中使用一致的大括号风格
    'brace-style': 'off',
    // 强制使用骆驼拼写法命名约定
    'camelcase': 'off',
    // 强制或禁止对注释的第一个字母大写
    'capitalized-comments': 'off',
    // 要求或禁止末尾逗号
    'comma-dangle': 'off',
    // 强制在逗号前后使用一致的空格
    'comma-spacing': 'off',
    // 强制使用一致的逗号风格
    'comma-style': 'off',
    // 强制在计算的属性的方括号中使用一致的空格
    'computed-property-spacing': 'off',
    // 当获取当前执行环境的上下文时，强制使用一致的命名
    'consistent-this': 'off',
    // 要求或禁止文件末尾存在空行
    'eol-last': 'off',
    // 要求或禁止在函数标识符和其调用之间有空格
    'func-call-spacing': 'off',
    // 要求函数名与赋值给它们的变量名或属性名相匹配
    'func-name-matching': 'off',
    // 要求或禁止使用命名的 function 表达式
    'func-names': 'off',
    // 强制一致地使用 function 声明或表达式
    'func-style': 'off',
    // 强制在函数括号内使用一致的换行
    'function-paren-newline': 'off',
    // 禁用指定的标识符
    'id-blacklist': 'off',
    // 强制标识符的最小和最大长度
    'id-length': 'off',
    // 要求标识符匹配一个指定的正则表达式
    'id-match': 'off',
    // 强制隐式返回的箭头函数体的位置
    'implicit-arrow-linebreak': 'off',
    // 强制使用一致的缩进
    'indent': 'off',
    // 强制在 JSX 属性中一致地使用双引号或单引号
    'jsx-quotes': 'off',
    // 强制在对象字面量的属性中键和值之间使用一致的间距
    'key-spacing': 'off',
    // 强制在关键字前后使用一致的空格
    'keyword-spacing': 'off',
    // 强制行注释的位置
    'line-comment-position': 'off',
    // 强制使用一致的换行风格
    'linebreak-style': 'off',
    // 要求在注释周围有空行
    'lines-around-comment': 'off',
    // 要求或禁止类成员之间出现空行
    'lines-between-class-members': 'off',
    // 强制可嵌套的块的最大深度
    'max-depth': 'off',
    // 强制一行的最大长度
    'max-len': 'off',
    // 强制最大行数
    'max-lines': 'off',
    // 强制函数最大代码行数
    'max-lines-per-function': 'off',
    // 强制回调函数最大嵌套深度
    'max-nested-callbacks': 'off',
    // 强制函数定义中最多允许的参数数量
    'max-params': 'off',
    // 强制函数块最多允许的的语句数量
    'max-statements': 'off',
    // 强制每一行中所允许的最大语句数量
    'max-statements-per-line': 'off',
    // 强制对多行注释使用特定风格
    'multiline-comment-style': 'off',
    // 要求或禁止在三元操作数中间换行
    'multiline-ternary': 'off',
    // 要求构造函数首字母大写
    'new-cap': 'off',
    // 强制或禁止调用无参构造函数时有圆括号
    'new-parens': 'off',
    // 要求方法链中每个调用都有一个换行符
    'gulp-newline-per-chained-call': 'off',
    // 禁用 Array 构造函数
    'no-array-constructor': 'off',
    // 禁用按位运算符
    'no-bitwise': 'off',
    // 禁用 continue 语句
    'no-continue': 'off',
    // 禁止在代码后使用内联注释
    'no-inline-comments': 'off',
    // 禁止 if 作为唯一的语句出现在 else 语句中
    'no-lonely-if': 'off',
    // 禁止混合使用不同的操作符
    'no-mixed-operators': 'off',
    // 禁止空格和 tab 的混合缩进
    'no-mixed-spaces-and-tabs': 'off',
    // 禁止连续赋值
    'no-multi-assign': 'off',
    // 禁止出现多行空行
    'no-multiple-empty-lines': 'off',
    // 禁用否定的表达式
    'no-negated-condition': 'off',
    // 禁用嵌套的三元表达式
    'no-nested-ternary': 'off',
    // 禁用 Object 的构造函数
    'no-new-object': 'off',
    // 禁用一元操作符 ++ 和 --
    'no-plusplus': 'off',
    // 禁用特定的语法
    'no-restricted-syntax': 'off',
    // 禁用 tab
    'no-tabs': 'off',
    // 禁用三元操作符
    'no-ternary': 'off',
    // 禁用行尾空格
    'no-trailing-spaces': 'off',
    // 禁止标识符中有悬空下划线
    'no-underscore-dangle': 'off',
    // 禁止可以在有更简单的可替代的表达式时使用三元操作符
    'no-unneeded-ternary': 'off',
    // 禁止属性前有空白
    'no-whitespace-before-property': 'off',
    // 强制单个语句的位置
    'nonblock-statement-body-position': 'off',
    // 强制大括号内换行符的一致性
    'object-curly-newline': 'off',
    // 强制在大括号中使用一致的空格
    'object-curly-spacing': 'off',
    // 强制将对象的属性放在不同的行上
    'object-property-newline': 'off',
    // 强制函数中的变量要么一起声明要么分开声明
    'one-var': 'off',
    // 要求或禁止在变量声明周围换行
    'one-var-declaration-per-line': 'off',
    // 要求或禁止在可能的情况下使用简化的赋值操作符
    'operator-assignment': 'off',
    // 强制操作符使用一致的换行符
    'operator-linebreak': 'off',
    // 要求或禁止块内填充
    'padded-blocks': 'off',
    // 要求或禁止在语句间填充空行
    'padding-line-between-statements': 'off',
    // 禁止使用以对象字面量作为第一个参数的 Object.assign，优先使用对象扩展
    'prefer-object-spread': 'off',
    // 要求对象字面量属性名称用引号括起来
    'quote-props': 'off',
    // 强制使用一致的反勾号、双引号或单引号
    'quotes': 'off',
    // 要求或禁止使用分号代替 ASI
    'semi': 'off',
    // 强制分号之前和之后使用一致的空格
    'semi-spacing': 'off',
    // 强制分号的位置
    'semi-style': 'off',
    // 要求对象属性按序排列
    'sort-keys': 'off',
    // 要求同一个声明块中的变量按顺序排列
    'sort-vars': 'off',
    // 强制在块之前使用一致的空格
    'space-before-blocks': 'off',
    // 强制在 function的左括号之前使用一致的空格
    'space-before-function-paren': 'off',
    // 强制在圆括号内使用一致的空格
    'space-in-parens': 'off',
    // 要求操作符周围有空格
    'space-infix-ops': 'off',
    // 强制在一元操作符前后使用一致的空格
    'space-unary-ops': 'off',
    // 强制在注释中 // 或 /* 使用一致的空格
    'spaced-comment': 'off',
    // 强制在 switch 的冒号左右有空格
    'switch-colon-spacing': 'off',
    // 要求或禁止在模板标记和它们的字面量之间有空格
    'template-tag-spacing': 'off',
    // 要求或禁止 Unicode 字节顺序标记 (BOM)
    'unicode-bom': 'off',
    // 要求正则表达式被括号括起来
    'wrap-regex': 'off',

    // ########## ECMAScript 6
    // 要求箭头函数体使用大括号
    'arrow-body-style': 'off',
    // 要求箭头函数的参数使用圆括号
    'arrow-parens': 'off',
    // 强制箭头函数的箭头前后使用一致的空格
    'arrow-spacing': 'off',
    // 要求在构造函数中有 super() 的调用
    'constructor-super': 'off',
    // 强制 generator 函数中 * 号周围使用一致的空格
    'generator-star-spacing': 'off',
    // 禁止修改类声明的变量
    'no-class-assign': 'off',
    // 禁止在可能与比较操作符相混淆的地方使用箭头函数
    'no-confusing-arrow': 'off',
    // 禁止修改 const 声明的变量
    'no-const-assign': 'off',
    // 禁止类成员中出现重复的名称
    'no-dupe-class-members': 'off',
    // 禁止重复模块导入
    'no-duplicate-imports': 'off',
    // 禁止 Symbolnew 操作符和 new 一起使用
    'no-new-symbol': 'off',
    // 禁止使用指定的 import 加载的模块
    'no-restricted-imports': 'off',
    // 禁止在构造函数中，在调用 super() 之前使用 this 或 super
    'no-this-before-super': 'off',
    // 禁止在对象中使用不必要的计算属性
    'no-useless-computed-key': 'off',
    // 禁用不必要的构造函数
    'no-useless-constructor': 'off',
    // 禁止在 import 和 export 和解构赋值时将引用重命名为相同的名字
    'no-useless-rename': 'off',
    // 要求使用 let 或 const 而不是 var
    'no-var': 'off',
    // 要求或禁止对象字面量中方法和属性使用简写语法
    'object-shorthand': 'off',
    // 要求回调函数使用箭头函数
    'prefer-arrow-callback': 'off',
    // 要求使用 const 声明那些声明后不再被修改的变量
    'prefer-const': 'off',
    // 优先使用数组和对象解构
    'prefer-destructuring': 'off',
    // 禁用 parseInt() 和 Number.parseInt()，使用二进制，八进制和十六进制字面量
    'prefer-numeric-literals': 'off',
    // 要求使用剩余参数而不是 arguments
    'prefer-rest-params': 'off',
    // 要求使用扩展运算符而非 .apply()
    'prefer-spread': 'off',
    // 要求使用模板字面量而非字符串连接
    'prefer-template': 'off',
    // 要求 generator 函数内有 yield
    'require-yield': 'off',
    // 强制剩余和扩展运算符及其表达式之间有空格
    'rest-spread-spacing': 'off',
    // 强制模块内的 import 排序
    'sort-imports': 'off',
    // 要求 symbol 描述
    'symbol-description': 'off',
    // 要求或禁止模板字符串中的嵌入表达式周围空格的使用
    'template-curly-spacing': 'off',
    // 强制在 yield* 表达式中 * 周围使用空格
    'yield-star-spacing': 'off',
  },
};
