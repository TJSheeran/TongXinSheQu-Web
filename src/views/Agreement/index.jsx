import React, { memo, useState } from 'react';
import ReactDOMServer from 'react-dom/server';
const Agreement = memo(() => {
    return (
        <div className="WordSection1">
            <p className="MsoNormal" align="center" style={{ marginTop: '24.0pt', marginRight: '0cm', marginBottom: '24.0pt', marginLeft: '0cm', textAlign: 'center', lineHeight: '120%' }}>
                <b>
                    <span style={{ fontSize: '26.0pt', lineHeight: '120%', fontFamily: '宋体' }}>用户隐私协议</span>
                </b>
            </p>
            <p className="MsoNormal" align="left" style={{ marginTop: '16.0pt', marginRight: '0cm', marginBottom: '6.0pt', marginLeft: '0cm', textAlign: 'left', lineHeight: '120%' }}>
                <b>
                    <span style={{ fontSize: '16.0pt', lineHeight: '120%', fontFamily: '宋体' }}>一、账号注册与注销</span>
                </b>
            </p>
            <p className="MsoNormal" align="left" style={{ marginTop: '6.0pt', marginRight: '0cm', marginBottom: '6.0pt', marginLeft: '0cm', textAlign: 'left', lineHeight: '120%' }}>
                <span lang="EN-US" style={{ fontSize: '12.0pt', lineHeight: '120%', fontFamily: '宋体' }}>
                    1.{' '}
                </span>
                <span style={{ fontSize: '12.0pt', lineHeight: '120%', fontFamily: '宋体' }}>用户在使用服务前需要注册一个账号。公司可以根据用户需求或产品需要对账号注册和绑定的方式进行变更，而无须事先通知用户。</span>
            </p>
            <p className="MsoNormal" align="left" style={{ marginTop: '6.0pt', marginRight: '0cm', marginBottom: '6.0pt', marginLeft: '0cm', textAlign: 'left', lineHeight: '120%' }}>
                <span lang="EN-US" style={{ fontSize: '12.0pt', lineHeight: '120%', fontFamily: '宋体' }}>
                    2.{' '}
                </span>
                <span style={{ fontSize: '12.0pt', lineHeight: '120%', fontFamily: '宋体' }}>鉴于账号的绑定注册方式，您同意在注册时允许收集您的手机号码及手机设备识别码等信息用于注册。</span>
            </p>
            <p className="MsoNormal" align="left" style={{ marginTop: '6.0pt', marginRight: '0cm', marginBottom: '6.0pt', marginLeft: '0cm', textAlign: 'left', lineHeight: '120%' }}>
                <span lang="EN-US" style={{ fontSize: '12.0pt', lineHeight: '120%', fontFamily: '宋体' }}>
                    3.{' '}
                </span>
                <span style={{ fontSize: '12.0pt', lineHeight: '120%', fontFamily: '宋体' }}>
                    在用户注册及使用服务时，需要搜集能识别用户身份的个人信息以便可以在必要时联系用户，或为用户提供更好的使用体验。搜集的信息包括但不限于用户的姓名、地址。对于这些信息的使用将受限于用户个人隐私信息保护条款的约束。
                </span>
            </p>
            <p className="MsoNormal" align="left" style={{ marginTop: '6.0pt', marginRight: '0cm', marginBottom: '6.0pt', marginLeft: '0cm', textAlign: 'left', lineHeight: '120%' }}>
                <span lang="EN-US" style={{ fontSize: '12.0pt', lineHeight: '120%', fontFamily: '宋体' }}>
                    4.{' '}
                </span>
                <span style={{ fontSize: '12.0pt', lineHeight: '120%', fontFamily: '宋体' }}>用户可以在设置页注销账户（请更新到最新版本），注销账户后，用户的全部个人信息将从服务器上删除，不再保存任何用户个人信息。</span>
            </p>
            <p className="MsoNormal" align="left" style={{ marginTop: '16.0pt', marginRight: '0cm', marginBottom: '6.0pt', marginLeft: '0cm', textAlign: 'left', lineHeight: '120%' }}>
                <b>
                    <span style={{ fontSize: '16.0pt', lineHeight: '120%', fontFamily: '宋体' }}>二、用户个人隐私信息保护</span>
                </b>
            </p>
            <p className="MsoNormal" align="left" style={{ marginTop: '6.0pt', marginRight: '0cm', marginBottom: '6.0pt', marginLeft: '0cm', textAlign: 'left', lineHeight: '120%' }}>
                <span lang="EN-US" style={{ fontSize: '12.0pt', lineHeight: '120%', fontFamily: '宋体' }}>
                    1.{' '}
                </span>
                <span style={{ fontSize: '12.0pt', lineHeight: '120%', fontFamily: '宋体' }}>
                    如果公司发现或收到他人举报或投诉用户违反本协议约定的，公司有权不经通知随时对相关内容，包括但不限于用户资料、发布记录进行审查、删除，并视情节轻重对违规账号处以包括但不限于警告、账号封禁、设备封禁、功能封禁的处罚，且通知用户处理结果。
                </span>
            </p>
            <p className="MsoNormal" align="left" style={{ marginTop: '6.0pt', marginRight: '0cm', marginBottom: '6.0pt', marginLeft: '0cm', textAlign: 'left', lineHeight: '120%' }}>
                <span lang="EN-US" style={{ fontSize: '12.0pt', lineHeight: '120%', fontFamily: '宋体' }}>
                    2.{' '}
                </span>
                <span style={{ fontSize: '12.0pt', lineHeight: '120%', fontFamily: '宋体' }}>因违反用户协议被封禁的用户，可以自行与公司联系。其中，被实施功能封禁的用户会在封禁期届满后自动恢复被封禁功能。被封禁用户可提交申诉，公司将对申诉进行审查，并自行合理判断决定是否变更处罚措施。</span>
            </p>
            <p className="MsoNormal" align="left" style={{ marginTop: '6.0pt', marginRight: '0cm', marginBottom: '6.0pt', marginLeft: '0cm', textAlign: 'left', lineHeight: '120%' }}>
                <span lang="EN-US" style={{ fontSize: '12.0pt', lineHeight: '120%', fontFamily: '宋体' }}>
                    3.{' '}
                </span>
                <span style={{ fontSize: '12.0pt', lineHeight: '120%', fontFamily: '宋体' }}>用户理解并同意，有权依合理判断对违反有关法律法规或本协议规定的行为进行处罚，对违法违规的任何用户采取适当的法律行动，并依据法律法规保存有关信息向有关部门报告等，用户应承担由此而产生的一切法律责任。</span>
            </p>
            <p className="MsoNormal" align="left" style={{ marginTop: '6.0pt', marginRight: '0cm', marginBottom: '6.0pt', marginLeft: '0cm', textAlign: 'left', lineHeight: '120%' }}>
                <span lang="EN-US" style={{ fontSize: '12.0pt', lineHeight: '120%', fontFamily: '宋体' }}>
                    4.{' '}
                </span>
                <span style={{ fontSize: '12.0pt', lineHeight: '120%', fontFamily: '宋体' }}>用户理解并同意，因用户违反本协议约定，导致或产生的任何第三方主张的任何索赔、要求或损失，包括合理的律师费，用户应当赔偿与合作公司、关联公司，并使之免受损害。</span>
            </p>
            <p className="MsoNormal" align="left" style={{ marginTop: '16.0pt', marginRight: '0cm', marginBottom: '6.0pt', marginLeft: '0cm', textAlign: 'left', lineHeight: '120%' }}>
                <b>
                    <span style={{ fontSize: '16.0pt', lineHeight: '120%', fontFamily: '宋体' }}>三、用户发布内容规范</span>
                </b>
            </p>
            <p className="MsoNormal" align="left" style={{ marginTop: '6.0pt', marginRight: '0cm', marginBottom: '6.0pt', marginLeft: '0cm', textAlign: 'left', lineHeight: '120%' }}>
                <span lang="EN-US" style={{ fontSize: '12.0pt', lineHeight: '120%', fontFamily: '宋体' }}>
                    1.{' '}
                </span>
                <span style={{ fontSize: '12.0pt', lineHeight: '120%', fontFamily: '宋体' }}>
                    本条所述内容是指用户使用过程中所制作、上载、复制、发布、传播的任何内容，包括但不限于账号头像、名称、用户说明等注册信息及认证资料，或文字、语音、图片、视频、图文等发送、回复或自动回复消息和相关链接页面，以及其他使用账号或服务所产生的内容。
                </span>
            </p>
            <p className="MsoNormal" align="left" style={{ marginTop: '6.0pt', marginRight: '0cm', marginBottom: '6.0pt', marginLeft: '0cm', textAlign: 'left', lineHeight: '120%' }}>
                <span lang="EN-US" style={{ fontSize: '12.0pt', lineHeight: '120%', fontFamily: '宋体' }}>
                    2.{' '}
                </span>
                <span style={{ fontSize: '12.0pt', lineHeight: '120%', fontFamily: '宋体' }}>用户不得利用账号或服务制作、上传、复制、发布、传播如下法律、法规和政策禁止的内容：</span>
            </p>
            <p className="MsoNormal" align="left" style={{ marginTop: '6.0pt', marginRight: '0cm', marginBottom: '6.0pt', marginLeft: '0cm', textAlign: 'left', lineHeight: '120%' }}>
                <span lang="EN-US" style={{ fontSize: '12.0pt', lineHeight: '120%', fontFamily: '宋体' }}>
                    &nbsp;&nbsp; -{' '}
                </span>
                <span style={{ fontSize: '12.0pt', lineHeight: '120%', fontFamily: '宋体' }}>反对宪法所确定的基本原则；</span>
            </p>
            <p className="MsoNormal" align="left" style={{ marginTop: '6.0pt', marginRight: '0cm', marginBottom: '6.0pt', marginLeft: '0cm', textAlign: 'left', lineHeight: '120%' }}>
                <span lang="EN-US" style={{ fontSize: '12.0pt', lineHeight: '120%', fontFamily: '宋体' }}>
                    &nbsp;&nbsp; -{' '}
                </span>
                <span style={{ fontSize: '12.0pt', lineHeight: '120%', fontFamily: '宋体' }}>危害国家安全，泄露国家秘密，颠覆国家政权，破坏国家统一；</span>
            </p>
            <p className="MsoNormal" align="left" style={{ marginTop: '6.0pt', marginRight: '0cm', marginBottom: '6.0pt', marginLeft: '0cm', textAlign: 'left', lineHeight: '120%' }}>
                <span lang="EN-US" style={{ fontSize: '12.0pt', lineHeight: '120%', fontFamily: '宋体' }}>
                    &nbsp;&nbsp; -{' '}
                </span>
                <span style={{ fontSize: '12.0pt', lineHeight: '120%', fontFamily: '宋体' }}>损害国家荣誉和利益；</span>
            </p>
            <p className="MsoNormal" align="left" style={{ marginTop: '6.0pt', marginRight: '0cm', marginBottom: '6.0pt', marginLeft: '0cm', textAlign: 'left', lineHeight: '120%' }}>
                <span lang="EN-US" style={{ fontSize: '12.0pt', lineHeight: '120%', fontFamily: '宋体' }}>
                    &nbsp;&nbsp; -{' '}
                </span>
                <span style={{ fontSize: '12.0pt', lineHeight: '120%', fontFamily: '宋体' }}>煽动民族仇恨、民族歧视，破坏民族团结；</span>
            </p>
            <p className="MsoNormal" align="left" style={{ marginTop: '6.0pt', marginRight: '0cm', marginBottom: '6.0pt', marginLeft: '0cm', textAlign: 'left', lineHeight: '120%' }}>
                <span lang="EN-US" style={{ fontSize: '12.0pt', lineHeight: '120%', fontFamily: '宋体' }}>
                    &nbsp;&nbsp; -{' '}
                </span>
                <span style={{ fontSize: '12.0pt', lineHeight: '120%', fontFamily: '宋体' }}>破坏国家宗教政策，宣扬邪教和封建迷信；</span>
            </p>
            <p className="MsoNormal" align="left" style={{ marginTop: '6.0pt', marginRight: '0cm', marginBottom: '6.0pt', marginLeft: '0cm', textAlign: 'left', lineHeight: '120%' }}>
                <span lang="EN-US" style={{ fontSize: '12.0pt', lineHeight: '120%', fontFamily: '宋体' }}>
                    &nbsp;&nbsp; -{' '}
                </span>
                <span style={{ fontSize: '12.0pt', lineHeight: '120%', fontFamily: '宋体' }}>散布谣言，扰乱社会秩序，破坏社会稳定；</span>
            </p>
            <p className="MsoNormal" align="left" style={{ marginTop: '6.0pt', marginRight: '0cm', marginBottom: '6.0pt', marginLeft: '0cm', textAlign: 'left', lineHeight: '120%' }}>
                <span lang="EN-US" style={{ fontSize: '12.0pt', lineHeight: '120%', fontFamily: '宋体' }}>
                    &nbsp;&nbsp; -{' '}
                </span>
                <span style={{ fontSize: '12.0pt', lineHeight: '120%', fontFamily: '宋体' }}>散布淫秽、色情、赌博、暴力、凶杀、恐怖或者教唆犯罪；</span>
            </p>
            <p className="MsoNormal" align="left" style={{ marginTop: '6.0pt', marginRight: '0cm', marginBottom: '6.0pt', marginLeft: '0cm', textAlign: 'left', lineHeight: '120%' }}>
                <span lang="EN-US" style={{ fontSize: '12.0pt', lineHeight: '120%', fontFamily: '宋体' }}>
                    &nbsp;&nbsp; -{' '}
                </span>
                <span style={{ fontSize: '12.0pt', lineHeight: '120%', fontFamily: '宋体' }}>侮辱或者诽谤他人，侵害他人合法权益；</span>
            </p>
            <p className="MsoNormal" align="left" style={{ marginTop: '6.0pt', marginRight: '0cm', marginBottom: '6.0pt', marginLeft: '0cm', textAlign: 'left', lineHeight: '120%' }}>
                <span lang="EN-US" style={{ fontSize: '12.0pt', lineHeight: '120%', fontFamily: '宋体' }}>
                    &nbsp;&nbsp; -{' '}
                </span>
                <span style={{ fontSize: '12.0pt', lineHeight: '120%', fontFamily: '宋体' }}>含有法律、行政法规禁止的其他内容信息。</span>
            </p>
            <p className="MsoNormal" align="left" style={{ marginTop: '6.0pt', marginRight: '0cm', marginBottom: '6.0pt', marginLeft: '0cm', textAlign: 'left', lineHeight: '120%' }}>
                <span lang="EN-US" style={{ fontSize: '12.0pt', lineHeight: '120%', fontFamily: '宋体' }}>
                    3.{' '}
                </span>
                <span style={{ fontSize: '12.0pt', lineHeight: '120%', fontFamily: '宋体' }}>用户不得利用账号或服务制作、上载、复制、发布、传播如下干扰正常运营，以及侵犯其他用户或第三方合法权益的内容：</span>
            </p>
            <p className="MsoNormal" align="left" style={{ marginTop: '6.0pt', marginRight: '0cm', marginBottom: '6.0pt', marginLeft: '0cm', textAlign: 'left', lineHeight: '120%' }}>
                <span lang="EN-US" style={{ fontSize: '12.0pt', lineHeight: '120%', fontFamily: '宋体' }}>
                    &nbsp;&nbsp; -{' '}
                </span>
                <span style={{ fontSize: '12.0pt', lineHeight: '120%', fontFamily: '宋体' }}>含有任何性或性暗示；</span>
            </p>
            <p className="MsoNormal" align="left" style={{ marginTop: '6.0pt', marginRight: '0cm', marginBottom: '6.0pt', marginLeft: '0cm', textAlign: 'left', lineHeight: '120%' }}>
                <span lang="EN-US" style={{ fontSize: '12.0pt', lineHeight: '120%', fontFamily: '宋体' }}>
                    &nbsp;&nbsp; -{' '}
                </span>
                <span style={{ fontSize: '12.0pt', lineHeight: '120%', fontFamily: '宋体' }}>含有辱骂、恐吓、威胁内容；</span>
            </p>
            <p className="MsoNormal" align="left" style={{ marginTop: '6.0pt', marginRight: '0cm', marginBottom: '6.0pt', marginLeft: '0cm', textAlign: 'left', lineHeight: '120%' }}>
                <span lang="EN-US" style={{ fontSize: '12.0pt', lineHeight: '120%', fontFamily: '宋体' }}>
                    &nbsp;&nbsp; -{' '}
                </span>
                <span style={{ fontSize: '12.0pt', lineHeight: '120%', fontFamily: '宋体' }}>含有骚扰、垃圾广告、恶意信息、诱骗信息；</span>
            </p>
            <p className="MsoNormal" align="left" style={{ marginTop: '6.0pt', marginRight: '0cm', marginBottom: '6.0pt', marginLeft: '0cm', textAlign: 'left', lineHeight: '120%' }}>
                <span lang="EN-US" style={{ fontSize: '12.0pt', lineHeight: '120%', fontFamily: '宋体' }}>
                    &nbsp;&nbsp; -{' '}
                </span>
                <span style={{ fontSize: '12.0pt', lineHeight: '120%', fontFamily: '宋体' }}>涉及他人隐私、个人信息或资料；</span>
            </p>
            <p className="MsoNormal" align="left" style={{ marginTop: '6.0pt', marginRight: '0cm', marginBottom: '6.0pt', marginLeft: '0cm', textAlign: 'left', lineHeight: '120%' }}>
                <span lang="EN-US" style={{ fontSize: '12.0pt', lineHeight: '120%', fontFamily: '宋体' }}>
                    &nbsp;&nbsp; -{' '}
                </span>
                <span style={{ fontSize: '12.0pt', lineHeight: '120%', fontFamily: '宋体' }}>侵害他人名誉权、肖像权、知识产权、商业秘密等合法权利；</span>
            </p>
            <p className="MsoNormal" align="left" style={{ marginTop: '6.0pt', marginRight: '0cm', marginBottom: '6.0pt', marginLeft: '0cm', textAlign: 'left', lineHeight: '120%' }}>
                <span lang="EN-US" style={{ fontSize: '12.0pt', lineHeight: '120%', fontFamily: '宋体' }}>
                    &nbsp;&nbsp; -{' '}
                </span>
                <span style={{ fontSize: '12.0pt', lineHeight: '120%', fontFamily: '宋体' }}>含有其他干扰服务正常运营和侵犯其他用户或第三方合法权益内容信息。</span>
            </p>
            <p className="MsoNormal" align="left" style={{ marginTop: '16.0pt', marginRight: '0cm', marginBottom: '6.0pt', marginLeft: '0cm', textAlign: 'left', lineHeight: '120%' }}>
                <b>
                    <span style={{ fontSize: '16.0pt', lineHeight: '120%', fontFamily: '宋体' }}>四、使用规则</span>
                </b>
            </p>
            <p className="MsoNormal" align="left" style={{ marginTop: '6.0pt', marginRight: '0cm', marginBottom: '6.0pt', marginLeft: '0cm', textAlign: 'left', lineHeight: '120%' }}>
                <span lang="EN-US" style={{ fontSize: '12.0pt', lineHeight: '120%', fontFamily: '宋体' }}>
                    1.{' '}
                </span>
                <span style={{ fontSize: '12.0pt', lineHeight: '120%', fontFamily: '宋体' }}>用户在服务中或通过服务所传送、发布的任何内容并不反映或代表，也不得被视为反映或代表公司的观点、立场或政策，公司对此不承担任何责任。</span>
            </p>
            <p className="MsoNormal" align="left" style={{ marginTop: '6.0pt', marginRight: '0cm', marginBottom: '6.0pt', marginLeft: '0cm', textAlign: 'left', lineHeight: '120%' }}>
                <span lang="EN-US" style={{ fontSize: '12.0pt', lineHeight: '120%', fontFamily: '宋体' }}>
                    2.{' '}
                </span>
                <span style={{ fontSize: '12.0pt', lineHeight: '120%', fontFamily: '宋体' }}>用户不得利用账号或服务进行如下行为：</span>
            </p>
            <p className="MsoNormal" align="left" style={{ marginTop: '6.0pt', marginRight: '0cm', marginBottom: '6.0pt', marginLeft: '0cm', textAlign: 'left', lineHeight: '120%' }}>
                <span lang="EN-US" style={{ fontSize: '12.0pt', lineHeight: '120%', fontFamily: '宋体' }}>
                    &nbsp;&nbsp; -{' '}
                </span>
                <span style={{ fontSize: '12.0pt', lineHeight: '120%', fontFamily: '宋体' }}>提交、发布虚假信息，或盗用他人头像或资料，冒充、利用他人名义；</span>
            </p>
            <p className="MsoNormal" align="left" style={{ marginTop: '6.0pt', marginRight: '0cm', marginBottom: '6.0pt', marginLeft: '0cm', textAlign: 'left', lineHeight: '120%' }}>
                <span lang="EN-US" style={{ fontSize: '12.0pt', lineHeight: '120%', fontFamily: '宋体' }}>
                    &nbsp;&nbsp; -{' '}
                </span>
                <span style={{ fontSize: '12.0pt', lineHeight: '120%', fontFamily: '宋体' }}>强制、诱导其他用户关注、点击链接页面或分享信息；</span>
            </p>
            <p className="MsoNormal" align="left" style={{ marginTop: '6.0pt', marginRight: '0cm', marginBottom: '6.0pt', marginLeft: '0cm', textAlign: 'left', lineHeight: '120%' }}>
                <span lang="EN-US" style={{ fontSize: '12.0pt', lineHeight: '120%', fontFamily: '宋体' }}>
                    &nbsp;&nbsp; -{' '}
                </span>
                <span style={{ fontSize: '12.0pt', lineHeight: '120%', fontFamily: '宋体' }}>虚构事实、隐瞒真相以误导、欺骗他人；</span>
            </p>
            <p className="MsoNormal" align="left" style={{ marginTop: '6.0pt', marginRight: '0cm', marginBottom: '6.0pt', marginLeft: '0cm', textAlign: 'left', lineHeight: '120%' }}>
                <span lang="EN-US" style={{ fontSize: '12.0pt', lineHeight: '120%', fontFamily: '宋体' }}>
                    &nbsp;&nbsp; -{' '}
                </span>
                <span style={{ fontSize: '12.0pt', lineHeight: '120%', fontFamily: '宋体' }}>利用技术手段批量建立虚假账号；</span>
            </p>
            <p className="MsoNormal" align="left" style={{ marginTop: '6.0pt', marginRight: '0cm', marginBottom: '6.0pt', marginLeft: '0cm', textAlign: 'left', lineHeight: '120%' }}>
                <span lang="EN-US" style={{ fontSize: '12.0pt', lineHeight: '120%', fontFamily: '宋体' }}>
                    &nbsp;&nbsp; -{' '}
                </span>
                <span style={{ fontSize: '12.0pt', lineHeight: '120%', fontFamily: '宋体' }}>利用账号或服务从事任何违法犯罪活动；</span>
            </p>
            <p className="MsoNormal" align="left" style={{ marginTop: '6.0pt', marginRight: '0cm', marginBottom: '6.0pt', marginLeft: '0cm', textAlign: 'left', lineHeight: '120%' }}>
                <span lang="EN-US" style={{ fontSize: '12.0pt', lineHeight: '120%', fontFamily: '宋体' }}>
                    &nbsp;&nbsp; -{' '}
                </span>
                <span style={{ fontSize: '12.0pt', lineHeight: '120%', fontFamily: '宋体' }}>制作、发布与以上行为相关的方法、工具，或对此类方法、工具进行运营或传播，无论这些行为是否为商业目的；</span>
            </p>
            <p className="MsoNormal" align="left" style={{ marginTop: '6.0pt', marginRight: '0cm', marginBottom: '6.0pt', marginLeft: '0cm', textAlign: 'left', lineHeight: '120%' }}>
                <span lang="EN-US" style={{ fontSize: '12.0pt', lineHeight: '120%', fontFamily: '宋体' }}>
                    &nbsp;&nbsp; -{' '}
                </span>
                <span style={{ fontSize: '12.0pt', lineHeight: '120%', fontFamily: '宋体' }}>其他违反法律法规规定、侵犯其他用户合法权益、干扰正常运营或未明示授权的行为。</span>
            </p>
            <p className="MsoNormal" align="left" style={{ marginTop: '6.0pt', marginRight: '0cm', marginBottom: '6.0pt', marginLeft: '0cm', textAlign: 'left', lineHeight: '120%' }}>
                <span lang="EN-US" style={{ fontSize: '12.0pt', lineHeight: '120%', fontFamily: '宋体' }}>
                    3.{' '}
                </span>
                <span style={{ fontSize: '12.0pt', lineHeight: '120%', fontFamily: '宋体' }}>用户须对利用账号或服务传送信息的真实性、合法性、无害性、准确性、有效性等全权负责，与用户所传播的信息相关的任何法律责任由用户自行承担，与公司无关。如因此给公司或第三方造成损害的，用户应当依法予以赔偿。</span>
            </p>
            <p className="MsoNormal" align="left" style={{ marginTop: '6.0pt', marginRight: '0cm', marginBottom: '6.0pt', marginLeft: '0cm', textAlign: 'left', lineHeight: '120%' }}>
                <span lang="EN-US" style={{ fontSize: '12.0pt', lineHeight: '120%', fontFamily: '宋体' }}>
                    4.{' '}
                </span>
                <span style={{ fontSize: '12.0pt', lineHeight: '120%', fontFamily: '宋体' }}>
                    提供的服务中可能包括广告，用户同意在使用过程中显示和第三方供应商、合作伙伴提供的广告。除法律法规明确规定外，用户应自行对该广告信息进行的交易负责，对用户因该广告信息进行的交易或前述广告商提供的内容而遭受的损失或损害，公司不承担任何责任。
                </span>
            </p>
            <p className="MsoNormal" align="left" style={{ marginTop: '16.0pt', marginRight: '0cm', marginBottom: '6.0pt', marginLeft: '0cm', textAlign: 'left', lineHeight: '120%' }}>
                <b>
                    <span style={{ fontSize: '16.0pt', lineHeight: '120%', fontFamily: '宋体' }}>
                        五、第三方<span lang="EN-US">SDK</span>
                    </span>
                </b>
            </p>
            <p className="MsoNormal" align="left" style={{ marginTop: '6.0pt', marginRight: '0cm', marginBottom: '6.0pt', marginLeft: '0cm', textAlign: 'left', lineHeight: '120%' }}>
                <span style={{ fontSize: '12.0pt', lineHeight: '120%', fontFamily: '宋体' }}>无</span>
            </p>
            <p className="MsoNormal" align="left" style={{ marginTop: '16.0pt', marginRight: '0cm', marginBottom: '6.0pt', marginLeft: '0cm', textAlign: 'left', lineHeight: '120%' }}>
                <b>
                    <span style={{ fontSize: '16.0pt', lineHeight: '120%', fontFamily: '宋体' }}>六、未成年人保护</span>
                </b>
            </p>
            <p className="MsoNormal" align="left" style={{ marginTop: '6.0pt', marginRight: '0cm', marginBottom: '6.0pt', marginLeft: '0cm', textAlign: 'left', lineHeight: '120%' }}>
                <span style={{ fontSize: '12.0pt', lineHeight: '120%', fontFamily: '宋体' }}>
                    我们非常重视对未成年人个人信息的保护。根据相关法律法规的规定，若您是<span lang="EN-US">18</span>周岁以下的未成年人，在使用服务前，应事先取得您的家长或法定监护人的同意。根据相关法律法规的规定，若您是<span lang="EN-US">14</span>
                    周岁以下的儿童，在使用相关的产品或服务前，应当按照注册、使用流程，事先取得您的家长或法定监护人的同意，并由您的家长或法定监护人帮助您完成产品或服务注册流程，以便您能使用我们提供的产品或服务。我们不收集也不存储针对未成年人用户的特定个人信息。
                </span>
            </p>
            <p className="MsoNormal" align="left" style={{ marginTop: '16.0pt', marginRight: '0cm', marginBottom: '6.0pt', marginLeft: '0cm', textAlign: 'left', lineHeight: '120%' }}>
                <b>
                    <span style={{ fontSize: '16.0pt', lineHeight: '120%', fontFamily: '宋体' }}>七、信息存储地点与期限</span>
                </b>
            </p>
            <p className="MsoNormal" align="left" style={{ marginTop: '6.0pt', marginRight: '0cm', marginBottom: '6.0pt', marginLeft: '0cm', textAlign: 'left', lineHeight: '120%' }}>
                <span style={{ fontSize: '12.0pt', lineHeight: '120%', fontFamily: '宋体' }}>我们遵守法律法规的规定，将在中华人民共和国境内收集和产生的个人信息存储在境内。一般而言，我们仅在为实现目的所必需的最短时间内保留您的个人信息，保存至用户主动注销账户时止，但下列情况除外：</span>
            </p>
            <p className="MsoNormal" align="left" style={{ marginTop: '6.0pt', marginRight: '0cm', marginBottom: '6.0pt', marginLeft: '0cm', textAlign: 'left', lineHeight: '120%' }}>
                <span lang="EN-US" style={{ fontSize: '12.0pt', lineHeight: '120%', fontFamily: '宋体' }}>
                    -{' '}
                </span>
                <span style={{ fontSize: '12.0pt', lineHeight: '120%', fontFamily: '宋体' }}>为遵守适用的法律法规等有关规定；</span>
            </p>
            <p className="MsoNormal" align="left" style={{ marginTop: '6.0pt', marginRight: '0cm', marginBottom: '6.0pt', marginLeft: '0cm', textAlign: 'left', lineHeight: '120%' }}>
                <span lang="EN-US" style={{ fontSize: '12.0pt', lineHeight: '120%', fontFamily: '宋体' }}>
                    -{' '}
                </span>
                <span style={{ fontSize: '12.0pt', lineHeight: '120%', fontFamily: '宋体' }}>为遵守法院判决、裁定或其他法律程序的规定；</span>
            </p>
            <p className="MsoNormal" align="left" style={{ marginTop: '6.0pt', marginRight: '0cm', marginBottom: '6.0pt', marginLeft: '0cm', textAlign: 'left', lineHeight: '120%' }}>
                <span lang="EN-US" style={{ fontSize: '12.0pt', lineHeight: '120%', fontFamily: '宋体' }}>
                    -{' '}
                </span>
                <span style={{ fontSize: '12.0pt', lineHeight: '120%', fontFamily: '宋体' }}>为遵守相关政府机关执法的要求；</span>
            </p>
            <p className="MsoNormal" align="left" style={{ marginTop: '6.0pt', marginRight: '0cm', marginBottom: '6.0pt', marginLeft: '0cm', textAlign: 'left', lineHeight: '120%' }}>
                <span style={{ fontSize: '12.0pt', lineHeight: '120%', fontFamily: '宋体' }}>当我们的产品或服务发生停止运营的情形时，我们将采取例如，推送通知、公告等形式通知您，并在合理的期限内删除或匿名化处理您的个人信息。</span>
            </p>
            <p className="MsoNormal" align="left" style={{ marginTop: '16.0pt', marginRight: '0cm', marginBottom: '6.0pt', marginLeft: '0cm', textAlign: 'left', lineHeight: '120%' }}>
                <b>
                    <span style={{ fontSize: '16.0pt', lineHeight: '120%', fontFamily: '宋体' }}>八、其他</span>
                </b>
            </p>
            <p className="MsoNormal" align="left" style={{ marginTop: '6.0pt', marginRight: '0cm', marginBottom: '6.0pt', marginLeft: '0cm', textAlign: 'left', lineHeight: '120%' }}>
                <span lang="EN-US" style={{ fontSize: '12.0pt', lineHeight: '120%', fontFamily: '宋体' }}>
                    1.{' '}
                </span>
                <span style={{ fontSize: '12.0pt', lineHeight: '120%', fontFamily: '宋体' }}>郑重提醒用户注意本协议中免除责任和限制用户权利的条款，请用户仔细阅读，自主考虑风险。未成年人应在法定监护人的陪同下阅读本协议。</span>
            </p>
            <p className="MsoNormal" align="left" style={{ marginTop: '6.0pt', marginRight: '0cm', marginBottom: '6.0pt', marginLeft: '0cm', textAlign: 'left', lineHeight: '120%' }}>
                <span lang="EN-US" style={{ fontSize: '12.0pt', lineHeight: '120%', fontFamily: '宋体' }}>
                    2.{' '}
                </span>
                <span style={{ fontSize: '12.0pt', lineHeight: '120%', fontFamily: '宋体' }}>本协议的效力、解释及纠纷的解决，适用于中华人民共和国法律。若用户和公司之间发生任何纠纷或争议，首先应友好协商解决，协商不成的，用户同意将纠纷或争议提交公司住所地有管辖权的人民法院管辖。</span>
            </p>
            <p className="MsoNormal" align="left" style={{ marginTop: '6.0pt', marginRight: '0cm', marginBottom: '6.0pt', marginLeft: '0cm', textAlign: 'left', lineHeight: '120%' }}>
                <span lang="EN-US" style={{ fontSize: '12.0pt', lineHeight: '120%', fontFamily: '宋体' }}>
                    3.{' '}
                </span>
                <span style={{ fontSize: '12.0pt', lineHeight: '120%', fontFamily: '宋体' }}>本协议的任何条款无论因何种原因无效或不具可执行性，其余条款仍有效，对双方具有约束力。</span>
            </p>
            <p className="MsoNormal" align="left" style={{ marginTop: '6.0pt', marginRight: '0cm', marginBottom: '6.0pt', marginLeft: '0cm', textAlign: 'left', lineHeight: '120%' }}>
                <span lang="EN-US" style={{ fontSize: '12.0pt', lineHeight: '120%', fontFamily: '宋体' }}>
                    4.{' '}
                </span>
                <span style={{ fontSize: '12.0pt', lineHeight: '120%', fontFamily: '宋体' }}>本协议最终解释权归所有，如有任何疑问，可以与客服联系，电话：17317361204，邮箱：17317361204@163.com。</span>
            </p>
        </div>
    );
});
export default Agreement;
