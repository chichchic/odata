OData를 위한 라이브러리와 툴들이 많이 존재하지만
입문자들과 자신만의 라이브러리를 만들어보고자 하는 사람들에게는 순수한 HTTP 요청과 응답들이 매우 중요하다.

[OData문서 v_4.01](https://www.odata.org/documentation/)

**Qeury Options**
1. filter: collection안에 있는 resource 중 expression에서 반환된 값이 true인 것만 응답으로 보내준다.
2. expand: related 상태로 명시되어있는 media stream이나 resource를 포함해서 보내준다.
3. orderby: request 요청을 asc, desc 정렬해 받을 수 있다.
4. top: 몇 개의 결과값을 받을것인지 설정할수 있다.
5. skip: 몇 개의 결과값을 뛰어넘을것인지 설정할 수 있다.
6. count: match된 결과값의 개수를 응답에 포함해서 보내준다. (boolean 값)
7. select: 제한된 property들만들 응답으로 받도록 설정할수 있다.
8. search: 특정한 표현을 포함하고 있는 값들만을 제한해서 응답을 받아온다.
9. Lambda Operator: any와 all 연산자로 collection property 또는 entity를 평가한다.

nested 표현을 사용할 수 있다.

**ETag**
OData V4는 데이터 수정과 Action 요청을 위해 ETag를 지원한다.
수정과 삭제를 위해서는 header의 If-Match값이 ETag값과 일치해야한다.
*의문*
1. mediaEtag는 무엇인가
2. ETag값이 없으면 수정과 삭제, Action이 불가능한가. 만약 그렇다면 어떻게 ETag를 설정해줄 수 있는가.