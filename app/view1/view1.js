'use strict';

angular.module('myApp.view1', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view1', {
    templateUrl: 'view1/view1.html',
    controller: 'View1Ctrl'
  });
}])

.controller('View1Ctrl', [ '$scope', '$document', function($scope ,$document ) {

        $scope.title = $document[0].title;
        $scope.windowTitle = angular.element(window.document)[0].title;


        $scope.magictree =$document[0].getElementById('imageId');

        $scope.magicSrc = $scope.magictree.src;
        $scope.magicWidth = $scope.magictree.width;
        $scope.magicHeight = $scope.magictree.height;


        $scope.printNewReport = function (){


            var studentName = '김성은';

            // 최초 헤드라인 메시지의 형태
            //   'Reading Practice Report for '+ studentName '
            var HeadLineForStudent = function ( StudentName ) {

                var hMsg = 'Reading Practice Report for '+ StudentName ;
                var headlineMsg = { text: hMsg, style: 'headerCenter' };
                return headlineMsg;

            } ;

            var testDateString = 'Wednesday, September 23, 2015 2:39:14 PM';
            var schoolName = "E Chapters Gwangmyeong Cheolsan";
            var className = "Elementary Junior";
            var studentGrade = 2 ;
            var teacherName = "Mrs. B. Moon";
           //////////////////////////////////////////////////////////////////////////////////
           // 시험본 날짜, 학교..여기에는 학원명이 나타난다.그리고 반 정보 ..
            // 학년하고 선생님 이름을 표시한다.
            var ClassInformationTable = function (TDateString, SchoolName, ClassName, GradeNo, TeacherName ){

                var TDateMsg = 'Printed '+ TDateString;
                var SchoolAndClassName = "School : "+SchoolName+'\n'+"Class : "+ClassName;
                var GradeAndTeacher = 'Grade : '+GradeNo+'\n'+"Teacher : "+TeacherName;
                var CInformation = {
                    margin : [0,0,0,0],
                    table: {
                        widths: [ '50%', '50%' ],
                        headerRows: 1,
                        body: [
                            [{text: TDateMsg, alignment : 'center', colSpan : 2 }, {}],
                            [{text: SchoolAndClassName, alignment:'left'}, {text : GradeAndTeacher, alignment :'right'}]
                        ]
                    },
                    layout :  'headerLineOnly'
                };
                return CInformation;
            };
            ///////////////////////////////////////////////////////////////////////////////////////

            var bookTitle = "Marvin Redpost : Class President";
            var AuthorName = "Sachar, Louis";
            var bookLevel = 3.4 ;
            var quizNo = 28330;
            var wordCount = 6045;

            // 책정보를 표시하는 테이블 위에 표시되는 타이틀 정보
            var BookInformationHeadLine = { text: 'Book Information', style: 'subheader', margin : [0,5,0,5] };

            var BookInformationTable = function (BTitle, AName, BLevel, QNO,WCount) {

                var TitleAndAuthor = BTitle + " by " + AName ;
                var BLMsg = 'Book Level : '+ BLevel;
                var QNoMsg = "Quiz Number : "+QNO;
                var WCountMsg = "Word Count : "+ WCount;

                 var BITable =    {
                     style: 'tableExample', margin : [15,0,15,0],
                     table: {   widths: [ '20%', '80%' ],
                                   body: [
                                          [ { rowSpan : 3, image: 'magic', with : 80, height: 120, alignment: 'center', margin : [0,5,0,5] }, {text : TitleAndAuthor, style:'subheader'} ],
                                          [ '', {text: BLMsg , fontsize:10}],
                                          [ '', {text: QNoMsg+"   "+WCountMsg, fontsize:10}]
                                          ]
                             },
                     layout : {
                         hLineWidth: function(i, node) { return (i === 0 || i === node.table.body.length) ? 1 : 0; },
                         vLineWidth: function(i, node) { return (i === 0 || i === node.table.widths.length) ? 0 : 0; },
                         hLineColor: function(i, node) { return (i === 0 || i === node.table.body.length) ? 'gray' : 'gray'; },
                         vLineColor: function(i, node) { return (i === 0 || i === node.table.widths.length) ? 'gray' : 'gray'; }
                         }
                     }
                return BITable;
            };

            ////////////////////////////////////////////////////////////////////////////////////////////////
            //  테스트 점수를 표시하기 위한 타이틀과 점수 항목
            ///////////////////////////////////////////////////////////////////////////////////////////////
            var TestResult = function ( RightAnswer, Total) {
                // 점수를 표현하기 위해서 백분율을 구한다.
                var percentageScore = parseInt (RightAnswer / Total * 100);

                var scoreString = { text: 'Score : '+RightAnswer+' of '+Total+' ('+percentageScore+'%)  ', style: 'subheader' };
                //  만들고자 하는 객체모양 { text: 'Score : 9 of 10 (90%)  ', style: 'subheader' },
                return scoreString;
            };
            ////////////////////////////////////////////////////////////////////////////////////////////////////
            // 이것은 스코어 정보가 제시되고 난 후에 나타나는 기본 항목이다.
            ///////////////////////////////////////////////////////////////////////////////////////////////////
            var ReviewMsg = { text : 'Review Correct Answers.', style : 'headline2',     margin : [0,0,0,20]};

            ///////////////////////////////////////////////////////////////////////////////////////////////////
            // 다음은 틀린 문제의 문제와 오답, 그리고 정답을 표시하기 위한 변수 와
            // 함수 정의이다.
            var QuestionNo =  1;
            var totalQuestionNo = 10;
            var questionString =  "What is the character\'s name?";
            var yourAnswerMsg = "A. Kang Jung Ho";
            var correctAnswerMsg = "B. Choo Shin Soo";

            var WrongQAString = function ( QNo, Total, QString, YourAnswer, CorrectAnswer) {

                var QNString = '('+ QNo + '/' + Total + ") Question";
                var WQA =  {
                    style: 'tableExample',
                    margin : [15,0,15,10],
                    table: {
                        headerRows: 1, widths: [100, '*'],
                        body: [
                            [{text : QNString, alignment:'right'}, {text: QString , color: 'Blue', margin : [10,0,10,0]}],
                            [{text: 'Your Answer', alignment:'right'}, {text: YourAnswer, color: 'Black', margin : [15,0,10,0]}],
                            [{text: 'Correct Answer', alignment:'right'}, {text: CorrectAnswer, color: 'Black', margin : [15,0,10,0]} ]
                        ]
                    },
                    layout : {
                        hLineWidth: function (i, node) {  return ( i === 1 ) ? 1 : 0;   },
                        hLineColor: function(i, node) {   return (i === 0 || i === node.table.body.length) ? 'gray' : 'gray';   },
                        vLineWidth: function(i, node) {   return (i === 0 || i === node.table.widths.length) ? 0 : 0;             },
                        vLineColor: function(i, node) {   return (i === 0 || i === node.table.widths.length) ? 'gray' : 'gray'; }
                    }
                      };
                return WQA;
            };


            var scoreEvalMsg = "Ok! Very Good!";

            var FooterComment = function ( EvaluationMsg ){

                var footerMsg =  {
                    margin : [0,20,0,0],
                    table: {
                        widths: [ '50%', '50%' ],
                        headerRows: 1,
                        body: [
                            [{text: '', alignment : 'center', colSpan : 2 }, {}],
                            [{text: 'Comments : ', alignment:'left'}, {text : 'Teacher : ', alignment :'left'}],
                            [{text : EvaluationMsg , style : 'subheader'},  '']
                        ]
                    },
                    layout :  'headerLineOnly'
                };

                 return footerMsg;
            };


            var ResultDefinition = {
                content: [
                ],
                images: {
                   magic : 'data:image/jpeg;base64,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'
                },
                styles: {
                    headerCenter: {
                        fontSize: 18, bold: true, margin: [0, 0, 0, 10], color : 'blue', alignment : 'center'
                      //  font : 'NanumBarunGothic'
                    },
                    headline2 : {
                        fontSize: 10, color : 'black'
                        //font : 'NanumBarunGothic'
                    },
                    subheader: {
                       // font : 'NanumBarunGothic',
                        fontSize: 16, bold: true,  margin: [0, 10, 0, 5],  color: 'blue'
                    },
                    tableExample: {
                        margin: [0, 5, 0, 5],color : 'black'
                    }
                },
                defaultStyle: {
                    // alignment: 'justify'
                    font : 'NanumBarunGothic'
                }

            };
            pdfMake.fonts ={
                 NanumBarunGothic : {
                     normal : 'NanumBarunGothic.ttf',
                     bold : 'NanumBarunGothicBold.ttf'
                    // italics: 'NanumScript.ttf',
                    // bolditalics: 'NanumScript.ttf'
                 }
                //,
                //Roboto: {
                //    normal: 'Roboto-Regular.ttf',
                //    bold: 'Roboto-Medium.ttf',
                //    italics: 'Roboto-Italic.ttf',
                //    bolditalics: 'Roboto-Italic.ttf'
                //}
                 };
            ResultDefinition.content.push( HeadLineForStudent( studentName));
            ResultDefinition.content.push(ClassInformationTable  (testDateString, schoolName, className, studentGrade, teacherName ));
            ResultDefinition.content.push(BookInformationHeadLine);
            ResultDefinition.content.push(BookInformationTable (bookTitle,AuthorName,bookLevel,quizNo,wordCount));
            ResultDefinition.content.push(TestResult ( 8, 9));
            ResultDefinition.content.push(ReviewMsg);
            ResultDefinition.content.push(WrongQAString ( QuestionNo, totalQuestionNo, questionString, yourAnswerMsg, correctAnswerMsg));
            ResultDefinition.content.push(WrongQAString ( 2, totalQuestionNo, questionString, yourAnswerMsg, correctAnswerMsg));
            ResultDefinition.content.push(WrongQAString ( 4, totalQuestionNo, questionString, yourAnswerMsg, correctAnswerMsg));
            ResultDefinition.content.push(WrongQAString ( 6, totalQuestionNo, questionString, yourAnswerMsg, correctAnswerMsg));
            ResultDefinition.content.push(WrongQAString ( 8, totalQuestionNo, questionString, yourAnswerMsg, correctAnswerMsg));
            ResultDefinition.content.push(FooterComment( scoreEvalMsg ));
            // open the PDF in a new window
            pdfMake.createPdf(ResultDefinition).open();

            // print the PDF (temporarily Chrome-only)
            // pdfMake.createPdf(docDefinition).print();

            // download the PDF (temporarily Chrome-only)
            //pdfMake.createPdf(docDefinition).download('optionalName.pdf');
        }

        $scope.print2ndReport = function (){


            var studentName = '김성은';

            // 최초 헤드라인 메시지의 형태
            //   'Reading Practice Report for '+ studentName '
            var HeadLineForStudent = function ( StudentName ) {

                var hMsg = 'Reading Practice Report for '+ StudentName ;
                var headlineMsg = { text: hMsg, style: 'headerCenter' };
                return headlineMsg;

            } ;

            var testDateString = 'Wednesday, September 23, 2015 2:39:14 PM';
            var schoolName = "E Chapters Gwangmyeong Cheolsan";
            var className = "Elementary Junior";
            var studentGrade = 2 ;
            var teacherName = "Mrs. B. Moon";
            //////////////////////////////////////////////////////////////////////////////////
            // 시험본 날짜, 학교..여기에는 학원명이 나타난다.그리고 반 정보 ..
            // 학년하고 선생님 이름을 표시한다.
            var ClassInformationTable = function (TDateString, SchoolName, ClassName, GradeNo, TeacherName ){

                var TDateMsg = 'Printed '+ TDateString;
                var SchoolAndClassName = "School : "+SchoolName+'\n'+"Class : "+ClassName;
                var GradeAndTeacher = 'Grade : '+GradeNo+'\n'+"Teacher : "+TeacherName;
                var CInformation = {
                    margin : [0,0,0,0],
                    table: {
                        widths: [ '50%', '50%' ],
                        headerRows: 1,
                        body: [
                            [{text: TDateMsg, alignment : 'center', colSpan : 2 }, {}],
                            [{text: SchoolAndClassName, alignment:'left'}, {text : GradeAndTeacher, alignment :'right'}]
                        ]
                    },
                    layout :  'headerLineOnly'
                };
                return CInformation;
            };
            ///////////////////////////////////////////////////////////////////////////////////////

            var bookTitle = "Marvin Redpost : Class President";
            var AuthorName = "Sachar, Louis";
            var bookLevel = 3.4 ;
            var quizNo = 28330;
            var wordCount = 6045;

            // 책정보를 표시하는 테이블 위에 표시되는 타이틀 정보
            var BookInformationHeadLine = { text: 'Book Information', style: 'subheader', margin : [0,5,0,5] };

            var BookInformationTable = function (BTitle, AName, BLevel, QNO,WCount) {

                var TitleAndAuthor = BTitle + " by " + AName ;
                var BLMsg = 'Book Level : '+ BLevel;
                var QNoMsg = "Quiz Number : "+QNO;
                var WCountMsg = "Word Count : "+ WCount;

                var BITable =    {
                    style: 'tableExample', margin : [15,0,15,0],
                    table: {   widths: [ '20%', '80%' ],
                        body: [
                            [ { rowSpan : 3, image: 'magic', with : 80, height: 120, alignment: 'center', margin : [0,5,0,5] }, {text : TitleAndAuthor, style:'subheader'} ],
                            [ '', {text: BLMsg , fontsize:10}],
                            [ '', {text: QNoMsg+"   "+WCountMsg, fontsize:10}]
                        ]
                    },
                    layout : {
                        hLineWidth: function(i, node) { return (i === 0 || i === node.table.body.length) ? 1 : 0; },
                        vLineWidth: function(i, node) { return (i === 0 || i === node.table.widths.length) ? 0 : 0; },
                        hLineColor: function(i, node) { return (i === 0 || i === node.table.body.length) ? 'gray' : 'gray'; },
                        vLineColor: function(i, node) { return (i === 0 || i === node.table.widths.length) ? 'gray' : 'gray'; }
                    }
                }
                return BITable;
            };

            ////////////////////////////////////////////////////////////////////////////////////////////////
            //  테스트 점수를 표시하기 위한 타이틀과 점수 항목
            ///////////////////////////////////////////////////////////////////////////////////////////////
            var TestResult = function ( RightAnswer, Total) {
                // 점수를 표현하기 위해서 백분율을 구한다.
                var percentageScore = parseInt (RightAnswer / Total * 100);

                var scoreString = { text: 'Score : '+RightAnswer+' of '+Total+' ('+percentageScore+'%)  ', style: 'subheader' };
                //  만들고자 하는 객체모양 { text: 'Score : 9 of 10 (90%)  ', style: 'subheader' },
                return scoreString;
            };
            ////////////////////////////////////////////////////////////////////////////////////////////////////
            // 이것은 스코어 정보가 제시되고 난 후에 나타나는 기본 항목이다.
            ///////////////////////////////////////////////////////////////////////////////////////////////////
            var ReviewMsg = { text : 'Review Correct Answers.', style : 'headline2',     margin : [0,0,0,20]};

            ///////////////////////////////////////////////////////////////////////////////////////////////////
            // 다음은 틀린 문제의 문제와 오답, 그리고 정답을 표시하기 위한 변수 와
            // 함수 정의이다.
            var QuestionNo =  1;
            var totalQuestionNo = 10;
            var questionString =  "What is the character\'s name?";
            var yourAnswerMsg = "A. Kang Jung Ho";
            var correctAnswerMsg = "B. Choo Shin Soo";

            var WrongQAString = function ( QNo, Total, QString, YourAnswer, CorrectAnswer) {

                var QNString = '('+ QNo + '/' + Total + ") Question";
                var WQA =  {
                    style: 'tableExample',
                    margin : [15,0,15,10],
                    table: {
                        headerRows: 1, widths: [100, '*'],
                        body: [
                            [{text : QNString, alignment:'right'}, {text: QString , color: 'Blue', margin : [10,0,10,0]}],
                            [{text: 'Your Answer', alignment:'right'}, {text: YourAnswer, color: 'Black', margin : [15,0,10,0]}],
                            [{text: 'Correct Answer', alignment:'right'}, {text: CorrectAnswer, color: 'Black', margin : [15,0,10,0]} ]
                        ]
                    },
                    layout : {
                        hLineWidth: function (i, node) {  return ( i === 1 ) ? 1 : 0;   },
                        hLineColor: function(i, node) {   return (i === 0 || i === node.table.body.length) ? 'gray' : 'gray';   },
                        vLineWidth: function(i, node) {   return (i === 0 || i === node.table.widths.length) ? 0 : 0;             },
                        vLineColor: function(i, node) {   return (i === 0 || i === node.table.widths.length) ? 'gray' : 'gray'; }
                    }
                };
                return WQA;
            };
            var termName = "2016 Winter Vacation";
            var avgScore = "95%";
            var ePoint = 1.5;
            var ProgressString = function ( tName , avgScore, startDay, endDay, ePoint, avgATOSLevel, avgATOSGoal, passedQuizzes, quizesTaken , wordsRead) {


                var Progress = {
                    style: 'tableExample',
                    margin: [0, 0, 0, 10],
                    table: {
                        headerRows: 2, widths: ['*', '*'],
                        body: [
                            [{text: "My Progress in "+tName, bold: true, colSpan: 2, alignment: 'center', fillColor : '#dedede'}, {}],
                            [{text: startDay+" - "+endDay , fontSize: 8, colSpan: 2, alignment: 'center', fillColor : '#dedede'}, {}],
                            [{ text: 'Average Percent Correct \n\n'+avgScore+'\n\n', alignment: 'center'}, {
                                text: "Point Earned : \n\n"+parseFloat(ePoint)+"\n\n",
                                color: 'Black',
                                alignment: 'center',
                                margin: [15, 0, 10, 0]
                            }],
                            [  [{text: 'Average Lexile@Measure : 250\n\n', alignment: 'center'},
                                {   table: {
                                    widths :['*',80],
                                    body: [
                                        [ "Avg. ATOS Book Level :" , { text: ""+ parseFloat(avgATOSLevel), alignment : 'left'}],
                                        [ "ATOS Book Level Goal :", { text :""+  parseFloat(avgATOSGoal), alignment : 'left'} ]
                                       ]
                                     },
                                    alignment : 'right',
                                    layout: 'noBorders',
                                    fontSize : 10
                                }
                               ], [{
                                text: 'Marking Period Totals\n ', color: 'Black',   alignment: 'center',    margin: [15, 0, 10, 0] },
                                {   table: {
                                    widths :['*',90],
                                    body: [
                                        [ "Quizzes Passed :" , { text: ""+ parseInt(passedQuizzes), alignment : 'left'}],
                                        [ "Quizzes Taken :", { text : ""+ parseInt(quizesTaken), alignment : 'left'} ],
                                        [ "Words Read :", { text : ""+ parseInt(wordsRead), alignment : 'left'}]
                                          ]
                                             },
                                     alignment : 'right',
                                     layout: 'noBorders',
                                     fontSize : 10
                               }
                            ]]
                        ]
                       },
                    layout : {
                        hLineWidth: function (i, node) {  return ( i === 1 ) ? 0 : 1;   },
                        hLineColor: function(i, node) {   return (i === 0 || i === node.table.body.length) ? 'gray' : 'gray';   },
                        vLineWidth: function(i, node) {   return (i === 0 || i === node.table.widths.length) ? 1 : 1;             },
                        vLineColor: function(i, node) {   return (i === 0 || i === node.table.widths.length) ? 'gray' : 'gray'; }
                    }
                };
                return Progress;
            }

            var scoreEvalMsg = "Ok! Very Good!";

            var FooterComment = function ( EvaluationMsg ){

                var footerMsg =  {
                    margin : [0,20,0,0],
                    table: {
                        widths: [ '50%', '50%' ],
                        headerRows: 1,
                        body: [
                            [{text: '', alignment : 'center', colSpan : 2 }, {}],
                            [{text: 'Comments : ', alignment:'left'}, {text : 'Teacher : ', alignment :'left'}],
                            [{text : EvaluationMsg , style : 'subheader'},  '']
                        ]
                    },
                    layout :  'headerLineOnly'
                };

                return footerMsg;
            };


            var ResultDefinition = {
                content: [
                ],
                images: {
                    magic : 'data:image/jpeg;base64,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'
                },
                styles: {
                    headerCenter: {
                        fontSize: 18, bold: true, margin: [0, 0, 0, 10], color : 'blue', alignment : 'center'
                        //  font : 'NanumBarunGothic'
                    },
                    headline2 : {
                        fontSize: 10, color : 'black'
                        //font : 'NanumBarunGothic'
                    },
                    subheader: {
                        // font : 'NanumBarunGothic',
                        fontSize: 16, bold: true,  margin: [0, 10, 0, 5],  color: 'blue'
                    },
                    tableExample: {
                        margin: [0, 5, 0, 5],color : 'black'
                    }
                },
                defaultStyle: {
                    // alignment: 'justify'
                    font : 'NanumBarunGothic'
                }

            };
            pdfMake.fonts ={
                NanumBarunGothic : {
                    normal : 'NanumBarunGothic.ttf',
                    bold : 'NanumBarunGothicBold.ttf'
                    // italics: 'NanumScript.ttf',
                    // bolditalics: 'NanumScript.ttf'
                }
                //,
                //Roboto: {
                //    normal: 'Roboto-Regular.ttf',
                //    bold: 'Roboto-Medium.ttf',
                //    italics: 'Roboto-Italic.ttf',
                //    bolditalics: 'Roboto-Italic.ttf'
                //}
            };
            ResultDefinition.content.push( HeadLineForStudent( studentName));
            ResultDefinition.content.push(ClassInformationTable  (testDateString, schoolName, className, studentGrade, teacherName ));
            ResultDefinition.content.push(BookInformationHeadLine);
            ResultDefinition.content.push(BookInformationTable (bookTitle,AuthorName,bookLevel,quizNo,wordCount));
            ResultDefinition.content.push(TestResult ( 8, 9));
            ResultDefinition.content.push(ReviewMsg);
            ResultDefinition.content.push(WrongQAString ( QuestionNo, totalQuestionNo, questionString, yourAnswerMsg, correctAnswerMsg));
            ResultDefinition.content.push(WrongQAString ( 2, totalQuestionNo, questionString, yourAnswerMsg, correctAnswerMsg));
            ResultDefinition.content.push(WrongQAString ( 4, totalQuestionNo, questionString, yourAnswerMsg, correctAnswerMsg));
           // ResultDefinition.content.push(WrongQAString ( 6, totalQuestionNo, questionString, yourAnswerMsg, correctAnswerMsg));
           // ResultDefinition.content.push(WrongQAString ( 8, totalQuestionNo, questionString, yourAnswerMsg, correctAnswerMsg));
           // ResultDefinition.content.push(ProgressString());
            // tName , avgScore, ePoint, avgATOSLevel, avgATOSGoal, passedQuizzes, quizesTaken , wordsRead)
            ResultDefinition.content.push(ProgressString( "2016Winter Vacation","95%", "11//11/2015","11/30/2015",1.5, 2.5, 3.0, 5, 10, 20003 ));
            ResultDefinition.content.push(FooterComment( scoreEvalMsg ));
            // open the PDF in a new window
            pdfMake.createPdf(ResultDefinition).open();

            // print the PDF (temporarily Chrome-only)
            // pdfMake.createPdf(docDefinition).print();

            // download the PDF (temporarily Chrome-only)
            //pdfMake.createPdf(docDefinition).download('optionalName.pdf');
        };

        $scope.convertingImageToBase64 = function(){


            var canvas = $document[0].createElement("canvas");
            canvas.width = $scope.magictree.width;
            canvas.height =  $scope.magictree.height;

            var ctx = canvas.getContext("2d");
            ctx.drawImage($scope.magictree,0,0,$scope.magictree.width, $scope.magictree.heigh );
            var dataURL = canvas.toDataURL("image/jpg");

            $scope.finalDataURL = dataURL.replace(/^data:image\/(png|jpg);base64,/,"");
           alert($scope.finalDataURL);

        }

}]);