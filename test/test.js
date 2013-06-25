var alltest = {};

alltest.testWidth = function(input){
    $(input).AutoComplete({
        'data': ['One', 'Two', 'Three', 'Four', 'Five', 'Six', 'Seven', 'Eight', 'Nine', 'Ten', 'Eleven', 'Twelve'],
        'width': 300
    });
};

alltest.testWidthAuto = function(input){
    $(input).AutoComplete({
        'data': ['One', 'Two', 'Three', 'Four', 'Five', 'Six', 'Seven', 'Eight', 'Nine', 'Ten', 'Eleven', 'Twelve'],
        'width': 'auto'
    });
};

alltest.testItemHeight = function(input){
    $(input).AutoComplete({
        'data': ['One', 'Two', 'Three', 'Four', 'Five', 'Six', 'Seven', 'Eight', 'Nine', 'Ten', 'Eleven', 'Twelve'],
        'itemHeight': 50
    });
};

alltest.testArrayAsData = function(input){
    $(input).AutoComplete({
        'data': ['One', 'Two', 'Three', 'Four', 'Five', 'Six', 'Seven', 'Eight', 'Nine', 'Ten', 'Eleven', 'Twelve']
    });
};

alltest.testFunctionAsData = function(input){
    $(input).AutoComplete({
        'data': function(){
            return ['One', 'Two', 'Three', 'Four', 'Five', 'Six', 'Seven', 'Eight', 'Nine', 'Ten', 'Eleven', 'Twelve'];
        }
    });
};

alltest.testAjaxJsonAsData = function(input){
    $(input).AutoComplete({
        'data': "../test/data.json",
        'ajaxDataType': 'json',
        'onerror': function(msg){alert(msg);}
    });
};

alltest.testAjaxXmlAsData = function(input){
    $(input).AutoComplete({
        'data': "../test/data.xml",
        'ajaxDataType': 'xml',
        'onerror': function(msg){alert(msg);}
    });
};

alltest.testMaxHeight = function(input){
    $(input).AutoComplete({
        'data': ['One', 'Two', 'Three', 'Four', 'Five', 'Six', 'Seven', 'Eight', 'Nine', 'Ten', 'Eleven', 'Twelve'],
        'maxHeight': 100
    });
};

alltest.testMaxItems = function(input){
    $(input).AutoComplete({
        'data': ['One', 'Two', 'Three', 'Four', 'Five', 'Six', 'Seven', 'Eight', 'Nine', 'Ten', 'Eleven', 'Twelve'],
        'maxItems': 3
    });
};

alltest.testUpDirection = function(input){
    $(input).AutoComplete({
        'data': ['One', 'Two', 'Three', 'Four', 'Five', 'Six', 'Seven', 'Eight', 'Nine', 'Ten', 'Eleven', 'Twelve'],
        'listDirection': 'up'
    });
};

alltest.testDownDirection = function(input){
    $(input).AutoComplete({
        'data': ['One', 'Two', 'Three', 'Four', 'Five', 'Six', 'Seven', 'Eight', 'Nine', 'Ten', 'Eleven', 'Twelve'],
        'listDirection': 'down'
    });
};

alltest.testListStyleNormal = function(input){
    $(input).AutoComplete({
        'data': ['One', 'Two', 'Three', 'Four', 'Five', 'Six', 'Seven', 'Eight', 'Nine', 'Ten', 'Eleven', 'Twelve'],
        'listStyle': 'normal'
    });
};

alltest.testIconList = function(input){
    var world = ['Cambodia', 'Cameroon', 'Canada', 'Cape-Verde', 'Cayman-Islands', 'Central-African-Republic', 'Chad', 'Chile', 'China', 'Colombia', 'Commonwealth', 'Comoros', 'Costa-Rica', "Cote-d'Ivoire", 'Croatia', 'Cuba', 'Cyprus', 'Czech-Republic'],
        result = [];
    
    $.each(world, function(index, name){
        new Image().src = '../demo/image/worldFlag/' + name + '.png'; // 预加载图片
        result.push({
            'value': name,
            'label': name,
            'image': '../demo/image/worldFlag/' + name + '.png'
        });
    });

    $(input).AutoComplete({
        'data': result,
        'listStyle': 'iconList',
        'itemHeight': 24,
        'width': 280,
        'onerror': function(msg){alert(msg);}
    });
};

alltest.testIconListUp = function(input){
    var world = ['Cambodia', 'Cameroon', 'Canada', 'Cape-Verde', 'Cayman-Islands', 'Central-African-Republic', 'Chad', 'Chile', 'China', 'Colombia', 'Commonwealth', 'Comoros', 'Costa-Rica', "Cote-d'Ivoire", 'Croatia', 'Cuba', 'Cyprus', 'Czech-Republic'],
        result = [];
    
    $.each(world, function(index, name){
        new Image().src = '../demo/image/worldFlag/' + name + '.png'; // 预加载图片
        result.push({
            'value': name,
            'label': name,
            'image': '../demo/image/worldFlag/' + name + '.png'
        });
    });

    $(input).AutoComplete({
        'data': result,
        'listStyle': 'iconList',
        'listDirection': 'up',
        'emphasis': false,
        'itemHeight': 24,
        'maxHeight': 240,
        'onerror': function(msg){alert(msg);}
    });
};

alltest.testListStyleCustom = function(input){
    $(input).AutoComplete({
        'data': ['One', 'Two', 'Three', 'Four', 'Five', 'Six', 'Seven', 'Eight', 'Nine', 'Ten', 'Eleven', 'Twelve'],
        'listStyle': 'custom',
        'emphasis': false,
        'createItemHandler': function(index, data){
            return "<span style='color:green;'>--"+data.label+"--</span>";  // 文本显示为绿色，并在前后使用'--'包裹
        },
        'onerror': function(msg){alert(msg);}
    });
};

alltest.testOtherHandlersExistAfterDestroy = function(input){
    $(input).AutoComplete({
        'data': ['One', 'Two', 'Three', 'Four', 'Five', 'Six', 'Seven', 'Eight', 'Nine', 'Ten', 'Eleven', 'Twelve']
    }).bind('keyup', function(){
        $(this).after('exist.');
    }).AutoComplete('destroy');
};

alltest.testMatchHandler = function(input){
    $(input).AutoComplete({
        'data': ['One', 'Two', 'Three', 'Four', 'Five', 'Six', 'Seven', 'Eight', 'Nine', 'Ten', 'Eleven', 'Twelve'],
        'matchHandler': function(keyword, data){
            return data.value.indexOf(keyword) == 0;  // 匹配规则: 以输入框中的值开头且大小写敏感
        }
    });
};

alltest.testEmphasisHandler = function(input){
    $(input).AutoComplete({
        'data': ['One', 'Two', 'Three', 'Four', 'Five', 'Six', 'Seven', 'Eight', 'Nine', 'Ten', 'Eleven', 'Twelve'],
        'emphasisHandler': function(keyword, data){
            var regex = RegExp("("+keyword.replace(/([.?*+^$[\]\\(){}|-])/g, "\\$1")+")", 'ig');
            data.label = data.label.replace(regex, "<span style='font-weight:bold;color:blue;'>$1</span>");
        }
    });    
};

alltest.testAsyncTrue = function(input){
    $(input).AutoComplete({
        'data': "../test/data.json",
        'async': true,
        'onerror': function(msg){alert(msg);}
    });
};

alltest.testBeforeLoadData = function(input){
    $(input).AutoComplete({
        'data': "../test/data.json",
        'async': true,
        'beforeLoadDataHandler' : function(keyword){
            return keyword.length > 3;
        },
        'onerror': function(msg){alert(msg);}
    });
};

alltest.testAfterSelected = function(input){
    $(input).AutoComplete({
        'data': ['One', 'Two', 'Three', 'Four', 'Five', 'Six', 'Seven', 'Eight', 'Nine', 'Ten', 'Eleven', 'Twelve'],
        'afterSelectedHandler': function(data){
            alert(data.value);
        },
        'onerror': function(msg){alert(msg);}
    });
};
