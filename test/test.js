var alltest = {};

alltest.testWidth = function(input){
    $(input).AutoComplete({
        'data': ['One', 'Two', 'Three', 'Four', 'Five', 'Six', 'Seven', 'Eight', 'Nine', 'Ten', 'Eleven', 'Twelve'],
        'width': 300
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
}

alltest.testMaxItems = function(input){
    $(input).AutoComplete({
        'data': ['One', 'Two', 'Three', 'Four', 'Five', 'Six', 'Seven', 'Eight', 'Nine', 'Ten', 'Eleven', 'Twelve'],
        'maxItems': 3
    });
}

alltest.testUpDirection = function(input){
    $(input).AutoComplete({
        'data': ['One', 'Two', 'Three', 'Four', 'Five', 'Six', 'Seven', 'Eight', 'Nine', 'Ten', 'Eleven', 'Twelve'],
        'listDirection': 'up'
    });
}

alltest.testDownDirection = function(input){
    $(input).AutoComplete({
        'data': ['One', 'Two', 'Three', 'Four', 'Five', 'Six', 'Seven', 'Eight', 'Nine', 'Ten', 'Eleven', 'Twelve'],
        'listDirection': 'down'
    });
}

alltest.testListStyleNormal = function(input){
    $(input).AutoComplete({
        'data': ['One', 'Two', 'Three', 'Four', 'Five', 'Six', 'Seven', 'Eight', 'Nine', 'Ten', 'Eleven', 'Twelve'],
        'listStyle': 'normal'
    });
}

alltest.testIconList = function(input){
    var world = ['Abkhazia', 'Afghanistan', 'Aland', 'Albania', 'Algeria', 'American-Samoa', 'Andorra', 'Angola', 'Anguilla', 'Antarctica', 'Antigua-and-Barbuda', 'Argentina', 'Armenia', 'Aruba', 'Australia', 'Austria', 'Azerbaijan', 'Bahamas', 'Bahrain', 'Bangladesh', 'Barbados', 'Belarus', 'Belgium', 'Belize', 'Benin', 'Bermuda', 'Bhutan', 'Bolivia', 'Bosnia-and-Herzegovina', 'Botswana', 'Brazil', 'British-Virgin-Islands', 'Brunei', 'Bulgaria', 'Burkina-Faso', 'Burundi', 'Cambodia', 'Cameroon', 'Canada', 'Cape-Verde', 'Cayman-Islands', 'Central-African-Republic', 'Chad', 'Chile', 'China', 'Colombia', 'Commonwealth', 'Comoros', 'Costa-Rica', "Cote-d'Ivoire", 'Croatia', 'Cuba', 'Cyprus', 'Czech-Republic', 'Democratic-Republic-of-the-Congo', 'Denmark', 'Djibouti', 'Dominica', 'Dominican-Republic', 'East-Timor', 'Ecuador', 'Egypt', 'El-Salvador', 'England', 'Equatorial-Guinea', 'Eritrea', 'Estonia', 'Ethiopia', 'European-Union', 'Falkland-Islands', 'Faroes', 'Fiji', 'Finland', 'France', 'Gabon', 'Gambia', 'Georgia', 'Germany', 'Ghana', 'Greece', 'Greenland', 'Grenada', 'Guam', 'Guatemala', 'Guernsey', 'Guinea-Bissau', 'Guinea', 'Guyana', 'Haiti', 'Honduras', 'Hong-Kong', 'Hungary', 'Iceland', 'India', 'Indonesia', 'Iran', 'Iraq', 'Ireland', 'Isle-of-Man', 'Israel', 'Italy', 'Jamaica', 'Japan', 'Jersey', 'Jordan', 'Kazakhstan', 'Kenya', 'Kiribati', 'Kosovo', 'Kuwait', 'Kyrgyzstan', 'Laos', 'Latvia', 'Lebanon', 'Lesotho', 'Liberia', 'Libya', 'Liechtenstein', 'Lithuania', 'Luxembourg', 'Macau', 'Macedonia', 'Madagascar', 'Malawi', 'Malaysia', 'Maldives', 'Mali', 'Malta', 'Mars', 'Marshall-Islands', 'Mauritania', 'Mauritius', 'Mexico', 'Micronesia', 'Moldova', 'Monaco', 'Mongolia', 'Montenegro', 'Montserrat', 'Morocco', 'Mozambique', 'Myanmar', 'Nagorno-Karabakh', 'Namibia', 'NATO', 'Nauru', 'Nepal', 'Netherlands-Antilles', 'Netherlands', 'New-Zealand', 'Nicaragua', 'Niger', 'Nigeria', 'Norfolk-Island', 'North-Cyprus', 'North-Korea', 'Northern-Mariana-Islands', 'Norway', 'Olympics', 'Oman', 'Pakistan', 'Palau', 'Palestine', 'Panama', 'Papua-New-Guinea', 'Paraguay', 'Peru', 'Philippines', 'Pitcairn-Islands', 'Poland', 'Portugal', 'Puerto-Rico', 'Qatar', 'Red-Cross', 'Republic-of-the-Congo', 'Romania', 'Russia', 'Rwanda', 'Saint-Barthelemy', 'Saint-Helena', 'Saint-Kitts-and-Nevis', 'Saint-Lucia', 'Saint-Vincent-and-the-Grenadines', 'Samoa', 'San-Marino', 'Sao-Tome-and-Principe', 'Saudi-Arabia', 'Scotland', 'Senegal', 'Serbia', 'Seychelles', 'Sierra-Leone', 'Singapore', 'Slovakia', 'Slovenia', 'Solomon-Islands', 'Somalia', 'Somaliland', 'South-Africa', 'South-Georgia-and-the-South-Sandwich-Islands', 'South-Korea', 'South-Ossetia', 'Spain', 'Sri-Lanka', 'Sudan', 'Suriname', 'Swaziland', 'Sweden', 'Switzerland', 'Syria', 'Taiwan', 'Tajikistan', 'Tanzania', 'Thailand', 'Togo', 'Tonga', 'Trinidad-and-Tobago', 'Tunisia', 'Turkey', 'Turkmenistan', 'Turks-and-Caicos-Islands', 'Tuvalu', 'Uganda', 'Ukraine', 'United-Arab-Emirates', 'United-Kindom', 'United-Nations', 'United-States', 'Uruguay', 'US-Virgin-Islands', 'Uzbekistan', 'Vanuatu', 'Vatican-City', 'Venezuela', 'Vietnam', 'Wales', 'Western-Sahara', 'Yemen', 'Zambia', 'Zimbabwe'],
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
}

alltest.testIconListUp = function(input){
    var world = ['Abkhazia', 'Afghanistan', 'Aland', 'Albania', 'Algeria', 'American-Samoa', 'Andorra', 'Angola', 'Anguilla', 'Antarctica', 'Antigua-and-Barbuda', 'Argentina', 'Armenia', 'Aruba', 'Australia', 'Austria', 'Azerbaijan', 'Bahamas', 'Bahrain', 'Bangladesh', 'Barbados', 'Belarus', 'Belgium', 'Belize', 'Benin', 'Bermuda', 'Bhutan', 'Bolivia', 'Bosnia-and-Herzegovina', 'Botswana', 'Brazil', 'British-Virgin-Islands', 'Brunei', 'Bulgaria', 'Burkina-Faso', 'Burundi', 'Cambodia', 'Cameroon', 'Canada', 'Cape-Verde', 'Cayman-Islands', 'Central-African-Republic', 'Chad', 'Chile', 'China', 'Colombia', 'Commonwealth', 'Comoros', 'Costa-Rica', "Cote-d'Ivoire", 'Croatia', 'Cuba', 'Cyprus', 'Czech-Republic', 'Democratic-Republic-of-the-Congo', 'Denmark', 'Djibouti', 'Dominica', 'Dominican-Republic', 'East-Timor', 'Ecuador', 'Egypt', 'El-Salvador', 'England', 'Equatorial-Guinea', 'Eritrea', 'Estonia', 'Ethiopia', 'European-Union', 'Falkland-Islands', 'Faroes', 'Fiji', 'Finland', 'France', 'Gabon', 'Gambia', 'Georgia', 'Germany', 'Ghana', 'Greece', 'Greenland', 'Grenada', 'Guam', 'Guatemala', 'Guernsey', 'Guinea-Bissau', 'Guinea', 'Guyana', 'Haiti', 'Honduras', 'Hong-Kong', 'Hungary', 'Iceland', 'India', 'Indonesia', 'Iran', 'Iraq', 'Ireland', 'Isle-of-Man', 'Israel', 'Italy', 'Jamaica', 'Japan', 'Jersey', 'Jordan', 'Kazakhstan', 'Kenya', 'Kiribati', 'Kosovo', 'Kuwait', 'Kyrgyzstan', 'Laos', 'Latvia', 'Lebanon', 'Lesotho', 'Liberia', 'Libya', 'Liechtenstein', 'Lithuania', 'Luxembourg', 'Macau', 'Macedonia', 'Madagascar', 'Malawi', 'Malaysia', 'Maldives', 'Mali', 'Malta', 'Mars', 'Marshall-Islands', 'Mauritania', 'Mauritius', 'Mexico', 'Micronesia', 'Moldova', 'Monaco', 'Mongolia', 'Montenegro', 'Montserrat', 'Morocco', 'Mozambique', 'Myanmar', 'Nagorno-Karabakh', 'Namibia', 'NATO', 'Nauru', 'Nepal', 'Netherlands-Antilles', 'Netherlands', 'New-Zealand', 'Nicaragua', 'Niger', 'Nigeria', 'Norfolk-Island', 'North-Cyprus', 'North-Korea', 'Northern-Mariana-Islands', 'Norway', 'Olympics', 'Oman', 'Pakistan', 'Palau', 'Palestine', 'Panama', 'Papua-New-Guinea', 'Paraguay', 'Peru', 'Philippines', 'Pitcairn-Islands', 'Poland', 'Portugal', 'Puerto-Rico', 'Qatar', 'Red-Cross', 'Republic-of-the-Congo', 'Romania', 'Russia', 'Rwanda', 'Saint-Barthelemy', 'Saint-Helena', 'Saint-Kitts-and-Nevis', 'Saint-Lucia', 'Saint-Vincent-and-the-Grenadines', 'Samoa', 'San-Marino', 'Sao-Tome-and-Principe', 'Saudi-Arabia', 'Scotland', 'Senegal', 'Serbia', 'Seychelles', 'Sierra-Leone', 'Singapore', 'Slovakia', 'Slovenia', 'Solomon-Islands', 'Somalia', 'Somaliland', 'South-Africa', 'South-Georgia-and-the-South-Sandwich-Islands', 'South-Korea', 'South-Ossetia', 'Spain', 'Sri-Lanka', 'Sudan', 'Suriname', 'Swaziland', 'Sweden', 'Switzerland', 'Syria', 'Taiwan', 'Tajikistan', 'Tanzania', 'Thailand', 'Togo', 'Tonga', 'Trinidad-and-Tobago', 'Tunisia', 'Turkey', 'Turkmenistan', 'Turks-and-Caicos-Islands', 'Tuvalu', 'Uganda', 'Ukraine', 'United-Arab-Emirates', 'United-Kindom', 'United-Nations', 'United-States', 'Uruguay', 'US-Virgin-Islands', 'Uzbekistan', 'Vanuatu', 'Vatican-City', 'Venezuela', 'Vietnam', 'Wales', 'Western-Sahara', 'Yemen', 'Zambia', 'Zimbabwe'],
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
}

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
}

alltest.testOtherHandlersExistAfterDestroy = function(input){
    $(input).AutoComplete({
        'data': ['One', 'Two', 'Three', 'Four', 'Five', 'Six', 'Seven', 'Eight', 'Nine', 'Ten', 'Eleven', 'Twelve']
    }).bind('keyup', function(){
        $(this).after('exist');
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
}

alltest.testAsyncTrue = function(input){
    $(input).AutoComplete({
        'data': "../test/data.json",
        'async': true,
        'onerror': function(msg){alert(msg);}
    });
}