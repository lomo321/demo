/**
 * Created by jie on 2015/9/7.
 */
var single = (function() {
    //�Ե���������
    var unique;
    //�жϵ����Ƿ��Ѿ�����
    function getInstance() {
        if(unique===undefined) {
            unique = new Construct();
        }
        return unique;
    }
    //���캯��
    function Construct() {
        //���캯��
    }
    //���ػ�ȡ�����ӵķ���
    return {
        getInstance:getInstance
    }
})();

var a = single.getInstance();