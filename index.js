const _0x2922f0=_0x2da5;(function(_0x45d42e,_0x19d80f){const _0x36d0dd=_0x2da5,_0x125d99=_0x45d42e();while(!![]){try{const _0x22ea5e=parseInt(_0x36d0dd(0x1de))/0x1*(-parseInt(_0x36d0dd(0x20a))/0x2)+parseInt(_0x36d0dd(0x22b))/0x3*(parseInt(_0x36d0dd(0x202))/0x4)+parseInt(_0x36d0dd(0x226))/0x5+parseInt(_0x36d0dd(0x1ff))/0x6*(-parseInt(_0x36d0dd(0x17e))/0x7)+parseInt(_0x36d0dd(0x1d9))/0x8+-parseInt(_0x36d0dd(0x24a))/0x9*(-parseInt(_0x36d0dd(0x20c))/0xa)+-parseInt(_0x36d0dd(0x203))/0xb*(parseInt(_0x36d0dd(0x1a3))/0xc);if(_0x22ea5e===_0x19d80f)break;else _0x125d99['push'](_0x125d99['shift']());}catch(_0x50d023){_0x125d99['push'](_0x125d99['shift']());}}}(_0x5cbd,0x6968c));const _0x2253bd=(function(){let _0x3281f2=!![];return function(_0x5a32fa,_0x545600){const _0x3aff4b=_0x3281f2?function(){if(_0x545600){const _0x3092e8=_0x545600['apply'](_0x5a32fa,arguments);return _0x545600=null,_0x3092e8;}}:function(){};return _0x3281f2=![],_0x3aff4b;};}()),_0x52d894=_0x2253bd(this,function(){const _0xa56183=_0x2da5;return _0x52d894['toString']()[_0xa56183(0x179)]('(((.+)+)+)+$')[_0xa56183(0x18f)]()[_0xa56183(0x17b)](_0x52d894)[_0xa56183(0x179)]('(((.+)+)+)+$');});_0x52d894(),require(_0x2922f0(0x1b3));const {default:ElisaBotMdConnect,useSingleFileAuthState,DisconnectReason,fetchLatestBaileysVersion,generateForwardMessageContent,prepareWAMessageMedia,generateWAMessageFromContent,generateMessageID,downloadContentFromMessage,makeInMemoryStore,jidDecode,proto}=require('@adiwajshing/baileys'),{state,saveState}=useSingleFileAuthState(sessionName+_0x2922f0(0x246)),pino=require(_0x2922f0(0x1b8)),{Boom}=require(_0x2922f0(0x21d)),fs=require('fs'),yargs=require(_0x2922f0(0x22c)),chalk=require(_0x2922f0(0x1bd)),FileType=require(_0x2922f0(0x1f5)),path=require('path'),_=require(_0x2922f0(0x189)),axios=require('axios'),PhoneNumber=require(_0x2922f0(0x198)),{imageToWebp,videoToWebp,writeExifImg,writeExifVid}=require(_0x2922f0(0x200)),{smsg,isUrl,generateMessageTag,getBuffer,getSizeMedia,fetchJson,await,sleep}=require(_0x2922f0(0x1c2)),{TelegraPh}=require(_0x2922f0(0x1ca)),moment=require(_0x2922f0(0x182)),getRandom=_0x80cfff=>{const _0x183352=_0x2922f0;return''+Math[_0x183352(0x1f8)](Math['random']()*0x2710)+_0x80cfff;};var low;try{low=require(_0x2922f0(0x1f3));}catch(_0x46089e){low=require(_0x2922f0(0x17d));}const {Low,JSONFile}=low,mongoDB=require('./lib/mongoDB');global['api']=(_0x31e878,_0x1d6e78='/',_0x254987={},_0x377f70)=>(_0x31e878 in global['APIs']?global[_0x2922f0(0x176)][_0x31e878]:_0x31e878)+_0x1d6e78+(_0x254987||_0x377f70?'?'+new URLSearchParams(Object['entries']({..._0x254987,..._0x377f70?{[_0x377f70]:global['APIKeys'][_0x31e878 in global[_0x2922f0(0x176)]?global[_0x2922f0(0x176)][_0x31e878]:_0x31e878]}:{}})):'');const store=makeInMemoryStore({'logger':pino()['child']({'level':_0x2922f0(0x184),'stream':'store'})});function _0x2da5(_0x3e9a9f,_0x412571){const _0x7696a8=_0x5cbd();return _0x2da5=function(_0x52d894,_0x2253bd){_0x52d894=_0x52d894-0x176;let _0x5cbd65=_0x7696a8[_0x52d894];return _0x5cbd65;},_0x2da5(_0x3e9a9f,_0x412571);}global[_0x2922f0(0x1d8)]=new Object(yargs(process[_0x2922f0(0x1ae)][_0x2922f0(0x1bb)](0x2))[_0x2922f0(0x1b4)](![])[_0x2922f0(0x18c)]()),global['db']=new Low(/https?:\/\//['test'](opts['db']||'')?new cloudDBAdapter(opts['db']):/mongodb/[_0x2922f0(0x20f)](opts['db'])?new mongoDB(opts['db']):new JSONFile(_0x2922f0(0x208))),global['DATABASE']=global['db'],global[_0x2922f0(0x1db)]=async function loadDatabase(){const _0xf4e78e=_0x2922f0;if(global['db'][_0xf4e78e(0x237)])return new Promise(_0x14d37d=>setInterval(function(){const _0x1b0ccd=_0xf4e78e;!global['db'][_0x1b0ccd(0x237)]?(clearInterval(this),_0x14d37d(global['db'][_0x1b0ccd(0x1cc)]==null?global[_0x1b0ccd(0x1db)]():global['db']['data'])):null;},0x1*0x3e8));if(global['db'][_0xf4e78e(0x1cc)]!==null)return;global['db']['READ']=!![],await global['db'][_0xf4e78e(0x1df)](),global['db'][_0xf4e78e(0x237)]=![],global['db']['data']={'users':{},'chats':{},'database':{},'game':{},'settings':{},'others':{},'sticker':{},...global['db']['data']||{}},global['db']['chain']=_[_0xf4e78e(0x18a)](global['db']['data']);},loadDatabase(),process['on'](_0x2922f0(0x1cf),console[_0x2922f0(0x18e)]);if(global['db'])setInterval(async()=>{const _0x17fb9d=_0x2922f0;if(global['db'][_0x17fb9d(0x1cc)])await global['db'][_0x17fb9d(0x1af)]();},0x1e*0x3e8);async function startQueenElisaBot(){const _0x1b84f2=_0x2922f0,_0x5391e2=ElisaBotMdConnect({'logger':pino({'level':'silent'}),'printQRInTerminal':!![],'browser':[_0x1b84f2(0x23a),'Safari',_0x1b84f2(0x1c5)],'auth':state});return store[_0x1b84f2(0x206)](_0x5391e2['ev']),_0x5391e2['ev']['on'](_0x1b84f2(0x247),async _0x1678df=>{const _0x5f274f=_0x1b84f2;global[_0x5f274f(0x1f0)]=='true'&&_0x5391e2[_0x5f274f(0x1a6)]('unavailable');try{mek=_0x1678df['messages'][0x0];if(!mek[_0x5f274f(0x181)])return;mek[_0x5f274f(0x181)]=Object[_0x5f274f(0x1da)](mek[_0x5f274f(0x181)])[0x0]===_0x5f274f(0x24d)?mek[_0x5f274f(0x181)][_0x5f274f(0x24d)][_0x5f274f(0x181)]:mek['message'];if(mek[_0x5f274f(0x1ec)]&&mek[_0x5f274f(0x1ec)][_0x5f274f(0x218)]===_0x5f274f(0x197))return;if(!_0x5391e2[_0x5f274f(0x242)]&&!mek[_0x5f274f(0x1ec)][_0x5f274f(0x188)]&&_0x1678df['type']===_0x5f274f(0x204))return;if(mek['key']['id'][_0x5f274f(0x232)]('BAE5')&&mek['key']['id'][_0x5f274f(0x1c4)]===0x10)return;m=smsg(_0x5391e2,mek,store),require(_0x5f274f(0x1bc))(_0x5391e2,m,_0x1678df,store),READ_MASSAGE==_0x5f274f(0x211)&&_0x5391e2[_0x5f274f(0x228)]([mek[_0x5f274f(0x1ec)]]);}catch(_0x2fc23a){console['log'](_0x2fc23a);}}),_0x5391e2['ev']['on'](_0x1b84f2(0x23f),async _0xfa5291=>{const _0x1c6457=_0x1b84f2;if(_0xfa5291['id']==_0x1c6457(0x215))return;if(_0xfa5291['id']=='120363052773472047@g.us')return;if(db[_0x1c6457(0x1cc)][_0x1c6457(0x1ea)][_0xfa5291['id']][_0x1c6457(0x1dc)])return;if(!db['data'][_0x1c6457(0x1ea)][_0xfa5291['id']][_0x1c6457(0x219)])return;console['log'](_0xfa5291);try{let _0x49399d=await _0x5391e2['groupMetadata'](_0xfa5291['id']),_0x9783c9=_0xfa5291[_0x1c6457(0x195)];for(let _0x1d9146 of _0x9783c9){try{ppuser=await _0x5391e2[_0x1c6457(0x241)](_0x1d9146,_0x1c6457(0x1c1));}catch{ppuser=_0x1c6457(0x1fd);}try{ppgroup=await _0x5391e2[_0x1c6457(0x241)](_0xfa5291['id'],'image');}catch{ppgroup=_0x1c6457(0x1fd);}if(_0xfa5291[_0x1c6457(0x233)]==_0x1c6457(0x220)){var _0x2995ed=await getBuffer(ppuser);const _0x50f462=_0x1c6457(0x185)+_0x49399d[_0x1c6457(0x1b9)]+'\x20@'+_0x1d9146[_0x1c6457(0x192)]('@')[0x0]+'\x0a\x0a'+_0x49399d['desc'],_0x49ac50=_0x1c6457(0x212),_0x48717e=db[_0x1c6457(0x1cc)][_0x1c6457(0x1ea)][_0xfa5291['id']][_0x1c6457(0x21a)]||_0x50f462,_0x5bf3a2=db[_0x1c6457(0x1cc)][_0x1c6457(0x1ea)][_0xfa5291['id']][_0x1c6457(0x1b1)]||ppuser,_0x272cc3=[{'index':0x1,'urlButton':{'displayText':_0x1c6457(0x1f9),'url':_0x1c6457(0x1b0)}}],_0x2338af={'image':{'url':_0x5bf3a2},'caption':_0x48717e,'footer':_0x1c6457(0x213),'templateButtons':_0x272cc3,'headerType':0x4};_0x5391e2[_0x1c6457(0x1e1)](_0xfa5291['id'],_0x2338af);}else{if(_0xfa5291[_0x1c6457(0x233)]==_0x1c6457(0x225)){const _0x59d57e=_0x1c6457(0x1a9)+_0x49399d[_0x1c6457(0x1b9)]+'\x20@'+_0x1d9146[_0x1c6457(0x192)]('@')[0x0]+'\x0a\x0a'+_0x49399d[_0x1c6457(0x1eb)],_0x525aa5=_0x1c6457(0x212),_0x18bfb8=db[_0x1c6457(0x1cc)][_0x1c6457(0x1ea)][_0xfa5291['id']][_0x1c6457(0x18d)]||_0x59d57e,_0x37d95a=db[_0x1c6457(0x1cc)][_0x1c6457(0x1ea)][_0xfa5291['id']]['goodbye_image']||ppuser,_0x1a5dee=[{'index':0x1,'urlButton':{'displayText':_0x1c6457(0x230),'url':_0x1c6457(0x1b0)}}],_0x7c85e6={'image':{'url':_0x37d95a},'caption':_0x18bfb8,'footer':_0x1c6457(0x213),'templateButtons':_0x1a5dee,'headerType':0x4};_0x5391e2[_0x1c6457(0x1e1)](_0xfa5291['id'],_0x7c85e6);}}}}catch(_0x4dc045){console[_0x1c6457(0x1d7)](_0x4dc045);}}),_0x5391e2[_0x1b84f2(0x22f)]=_0x1e18d5=>{const _0x37911c=_0x1b84f2;if(!_0x1e18d5)return _0x1e18d5;if(/:\d+@/gi[_0x37911c(0x20f)](_0x1e18d5)){let _0x5c9d1b=jidDecode(_0x1e18d5)||{};return _0x5c9d1b[_0x37911c(0x1ba)]&&_0x5c9d1b[_0x37911c(0x1d0)]&&_0x5c9d1b[_0x37911c(0x1ba)]+'@'+_0x5c9d1b['server']||_0x1e18d5;}else return _0x1e18d5;},_0x5391e2['ev']['on'](_0x1b84f2(0x199),_0x528fdc=>{const _0x1329b1=_0x1b84f2;for(let _0x792982 of _0x528fdc){let _0x419795=_0x5391e2['decodeJid'](_0x792982['id']);if(store&&store[_0x1329b1(0x194)])store[_0x1329b1(0x194)][_0x419795]={'id':_0x419795,'name':_0x792982[_0x1329b1(0x204)]};}}),_0x5391e2[_0x1b84f2(0x1f2)]=(_0x3ff06d,_0x561cdf=![])=>{const _0x4cf4e9=_0x1b84f2;id=_0x5391e2[_0x4cf4e9(0x22f)](_0x3ff06d),_0x561cdf=_0x5391e2[_0x4cf4e9(0x209)]||_0x561cdf;let _0x4ceeb7;if(id['endsWith'](_0x4cf4e9(0x1e8)))return new Promise(async _0x1a530c=>{const _0x1a3390=_0x4cf4e9;_0x4ceeb7=store[_0x1a3390(0x194)][id]||{};if(!(_0x4ceeb7['name']||_0x4ceeb7[_0x1a3390(0x1b9)]))_0x4ceeb7=_0x5391e2[_0x1a3390(0x1d6)](id)||{};_0x1a530c(_0x4ceeb7[_0x1a3390(0x1d5)]||_0x4ceeb7[_0x1a3390(0x1b9)]||PhoneNumber('+'+id[_0x1a3390(0x23c)](_0x1a3390(0x221),''))[_0x1a3390(0x223)](_0x1a3390(0x1e7)));});else _0x4ceeb7=id===_0x4cf4e9(0x222)?{'id':id,'name':_0x4cf4e9(0x21f)}:id===_0x5391e2['decodeJid'](_0x5391e2['user']['id'])?_0x5391e2[_0x4cf4e9(0x1ba)]:store['contacts'][id]||{};return(_0x561cdf?'':_0x4ceeb7['name'])||_0x4ceeb7[_0x4cf4e9(0x1b9)]||_0x4ceeb7[_0x4cf4e9(0x1ce)]||PhoneNumber('+'+_0x3ff06d[_0x4cf4e9(0x23c)](_0x4cf4e9(0x221),''))[_0x4cf4e9(0x223)](_0x4cf4e9(0x1e7));},_0x5391e2[_0x1b84f2(0x1a7)]=async(_0xd8b56a,_0x3a7eca,_0x224b8c='',_0x43942b={})=>{const _0x223571=_0x1b84f2;let _0x13e9ae=[];for(let _0x3a6ca3 of _0x3a7eca){_0x13e9ae[_0x223571(0x19b)]({'displayName':await _0x5391e2[_0x223571(0x1f2)](_0x3a6ca3),'vcard':_0x223571(0x217)+await _0x5391e2['getName'](_0x3a6ca3)+_0x223571(0x1cb)+await _0x5391e2[_0x223571(0x1f2)](_0x3a6ca3)+'\x0aitem1.TEL;waid='+_0x3a6ca3+':'+_0x3a6ca3+_0x223571(0x1be)+ytname+_0x223571(0x205)+socialm+'\x0aitem3.X-ABLabel:GitHub\x0aitem4.ADR:;;'+location+_0x223571(0x1bf)});}_0x5391e2[_0x223571(0x1e1)](_0xd8b56a,{'contacts':{'displayName':_0x13e9ae['length']+_0x223571(0x20d),'contacts':_0x13e9ae},..._0x43942b},{'quoted':_0x224b8c});},_0x5391e2['setStatus']=_0x4dcdbf=>{const _0x340d3d=_0x1b84f2;return _0x5391e2[_0x340d3d(0x24c)]({'tag':'iq','attrs':{'to':_0x340d3d(0x221),'type':_0x340d3d(0x187),'xmlns':_0x340d3d(0x1c0)},'content':[{'tag':_0x340d3d(0x1c0),'attrs':{},'content':Buffer[_0x340d3d(0x1f7)](_0x4dcdbf,'utf-8')}]}),_0x4dcdbf;},_0x5391e2['public']=!![],_0x5391e2[_0x1b84f2(0x196)]=_0xe764c1=>smsg(_0x5391e2,_0xe764c1,store),_0x5391e2['ev']['on'](_0x1b84f2(0x240),async _0x4d6efe=>{const _0x114843=_0x1b84f2,{connection:_0x143020,lastDisconnect:_0x341929}=_0x4d6efe;if(_0x143020===_0x114843(0x1a8)){let _0x571dfa=new Boom(_0x341929?.[_0x114843(0x18e)])?.[_0x114843(0x19f)][_0x114843(0x245)];if(_0x571dfa===DisconnectReason[_0x114843(0x183)])console[_0x114843(0x1d7)](_0x114843(0x20e)),_0x5391e2[_0x114843(0x231)]();else{if(_0x571dfa===DisconnectReason[_0x114843(0x248)])console[_0x114843(0x1d7)](_0x114843(0x1e5)),startQueenElisaBot();else{if(_0x571dfa===DisconnectReason['connectionLost'])console[_0x114843(0x1d7)]('Connection\x20Lost\x20from\x20Server,\x20reconnecting...'),startQueenElisaBot();else{if(_0x571dfa===DisconnectReason[_0x114843(0x21c)])console[_0x114843(0x1d7)]('Connection\x20Replaced,\x20Another\x20New\x20Session\x20Opened,\x20Please\x20Close\x20Current\x20Session\x20First'),_0x5391e2[_0x114843(0x231)]();else{if(_0x571dfa===DisconnectReason['loggedOut'])console[_0x114843(0x1d7)](_0x114843(0x1fc)),_0x5391e2[_0x114843(0x231)]();else{if(_0x571dfa===DisconnectReason['restartRequired'])console['log']('Restart\x20Required,\x20Restarting...'),startQueenElisaBot();else{if(_0x571dfa===DisconnectReason['timedOut'])console[_0x114843(0x1d7)](_0x114843(0x22e)),startQueenElisaBot();else _0x5391e2[_0x114843(0x1a5)](_0x114843(0x1d1)+_0x571dfa+'|'+_0x143020);}}}}}}}_0x4d6efe[_0x114843(0x1ef)]==_0x114843(0x17f)&&(await console[_0x114843(0x1d7)](chalk[_0x114843(0x1a2)][_0x114843(0x1d4)]('🔄👸\x20QUEEN\x20ELISA\x20CONNECTING...')),await _0x5391e2[_0x114843(0x249)](_0x114843(0x238))['then'](_0x46c1fb=>console[_0x114843(0x1d7)](_0x114843(0x23d)))[_0x114843(0x18b)](_0x21f392=>console[_0x114843(0x1d7)](_0x114843(0x18e)))),_0x4d6efe[_0x114843(0x1fb)]&&await console[_0x114843(0x1d7)](chalk['green'][_0x114843(0x1d4)](_0x114843(0x21b)));}),_0x5391e2['ev']['on']('creds.update',saveState),_0x5391e2['sendFileUrl']=async(_0xb4fd7,_0x4b9878,_0x564ec0,_0x170a16,_0x28b7a0={})=>{const _0xf5deeb=_0x1b84f2;let _0x2d49e9='',_0x312251=await axios[_0xf5deeb(0x1e0)](_0x4b9878);_0x2d49e9=_0x312251[_0xf5deeb(0x190)][_0xf5deeb(0x20b)];if(_0x2d49e9[_0xf5deeb(0x192)]('/')[0x1]===_0xf5deeb(0x24b))return _0x5391e2[_0xf5deeb(0x1e1)](_0xb4fd7,{'video':await getBuffer(_0x4b9878),'caption':_0x564ec0,'gifPlayback':!![],..._0x28b7a0},{'quoted':_0x170a16,..._0x28b7a0});let _0x7e9844=_0x2d49e9[_0xf5deeb(0x192)]('/')[0x0]+_0xf5deeb(0x1b6);if(_0x2d49e9===_0xf5deeb(0x239))return _0x5391e2[_0xf5deeb(0x1e1)](_0xb4fd7,{'document':await getBuffer(_0x4b9878),'mimetype':'application/pdf','caption':_0x564ec0,..._0x28b7a0},{'quoted':_0x170a16,..._0x28b7a0});if(_0x2d49e9[_0xf5deeb(0x192)]('/')[0x0]===_0xf5deeb(0x1c1))return _0x5391e2[_0xf5deeb(0x1e1)](_0xb4fd7,{'image':await getBuffer(_0x4b9878),'caption':_0x564ec0,..._0x28b7a0},{'quoted':_0x170a16,..._0x28b7a0});if(_0x2d49e9[_0xf5deeb(0x192)]('/')[0x0]===_0xf5deeb(0x1a1))return _0x5391e2['sendMessage'](_0xb4fd7,{'video':await getBuffer(_0x4b9878),'caption':_0x564ec0,'mimetype':_0xf5deeb(0x1f1),..._0x28b7a0},{'quoted':_0x170a16,..._0x28b7a0});if(_0x2d49e9[_0xf5deeb(0x192)]('/')[0x0]==='audio')return _0x5391e2[_0xf5deeb(0x1e1)](_0xb4fd7,{'audio':await getBuffer(_0x4b9878),'caption':_0x564ec0,'mimetype':_0xf5deeb(0x234),..._0x28b7a0},{'quoted':_0x170a16,..._0x28b7a0});},_0x5391e2[_0x1b84f2(0x207)]=(_0x2cdc89,_0x13eaf9='',_0x47bccc='',_0x57f112='',_0x1e5a54='',_0x31012d=[],_0x112923)=>{const _0xe8109=_0x1b84f2;let _0x5a4d55=_0x31012d;var _0x2076ea={'text':_0x13eaf9,'footer':_0x47bccc,'title':_0x57f112,'buttonText':_0x1e5a54,'sections':_0x5a4d55};_0x5391e2[_0xe8109(0x1e1)](_0x2cdc89,_0x2076ea,{'quoted':_0x112923});},_0x5391e2[_0x1b84f2(0x23e)]=(_0x25e845,_0x37be6e='',_0xb7c4e8='',_0x2f1d01=[])=>{const _0xc64276=_0x1b84f2;let _0x6fac06=_0x2f1d01;var _0x3a949e={'text':_0x37be6e,'footer':_0xb7c4e8,'templateButtons':_0x6fac06};_0x5391e2[_0xc64276(0x1e1)](_0x25e845,_0x3a949e);},_0x5391e2['send5ButImg']=async(_0x3511fc,_0x251a4b='',_0x5c08b='',_0x5b5546,_0x1e62cd=[],_0x38c57d={})=>{const _0x5ebe9d=_0x1b84f2;let _0x3eea53=await prepareWAMessageMedia({'image':_0x5b5546},{'upload':_0x5391e2[_0x5ebe9d(0x201)]});var _0x4c979f=generateWAMessageFromContent(_0x3511fc,proto[_0x5ebe9d(0x1b6)]['fromObject']({'templateMessage':{'hydratedTemplate':{'imageMessage':_0x3eea53['imageMessage'],'hydratedContentText':_0x251a4b,'hydratedFooterText':_0x5c08b,'hydratedButtons':_0x1e62cd}}}),_0x38c57d);_0x5391e2[_0x5ebe9d(0x1e4)](_0x3511fc,_0x4c979f[_0x5ebe9d(0x181)],{'messageId':_0x4c979f[_0x5ebe9d(0x1ec)]['id']});},_0x5391e2[_0x1b84f2(0x1e2)]=async(_0x3db7c9,_0x15a6a2='',_0x1d0d09='',_0x139a41,_0x378be3=[],_0x23a840={})=>{const _0x45fcfd=_0x1b84f2;let _0x34e32b=await prepareWAMessageMedia({'video':_0x139a41},{'upload':_0x5391e2[_0x45fcfd(0x201)]});var _0x392c7e=generateWAMessageFromContent(_0x3db7c9,proto[_0x45fcfd(0x1b6)][_0x45fcfd(0x236)]({'templateMessage':{'hydratedTemplate':{'videoMessage':_0x34e32b[_0x45fcfd(0x1ac)],'hydratedContentText':_0x15a6a2,'hydratedFooterText':_0x1d0d09,'hydratedButtons':_0x378be3}}}),_0x23a840);_0x5391e2[_0x45fcfd(0x1e4)](_0x3db7c9,_0x392c7e[_0x45fcfd(0x181)],{'messageId':_0x392c7e['key']['id']});},_0x5391e2['send5ButGif']=async(_0x29195e,_0x5ed63c='',_0x2796db='',_0x5ecd4b,_0x5d8976=[],_0x4b56cb={})=>{const _0x2d87ab=_0x1b84f2;let _0x30888a=await prepareWAMessageMedia({'video':_0x5ecd4b,'gifPlayback':!![]},{'upload':_0x5391e2['waUploadToServer']});var _0x1fae83=generateWAMessageFromContent(_0x29195e,proto[_0x2d87ab(0x1b6)]['fromObject']({'templateMessage':{'hydratedTemplate':{'videoMessage':_0x30888a[_0x2d87ab(0x1ac)],'hydratedContentText':_0x5ed63c,'hydratedFooterText':_0x2796db,'hydratedButtons':_0x5d8976}}}),_0x4b56cb);_0x5391e2[_0x2d87ab(0x1e4)](_0x29195e,_0x1fae83[_0x2d87ab(0x181)],{'messageId':_0x1fae83[_0x2d87ab(0x1ec)]['id']});},_0x5391e2['sendButtonText']=(_0x43684d,_0x4e3761=[],_0x48e5bd,_0x324a45,_0x56533e='',_0xd66f5e={})=>{let _0x214acc={'text':_0x48e5bd,'footer':_0x324a45,'buttons':_0x4e3761,'headerType':0x2,..._0xd66f5e};_0x5391e2['sendMessage'](_0x43684d,_0x214acc,{'quoted':_0x56533e,..._0xd66f5e});},_0x5391e2[_0x1b84f2(0x1f4)]=(_0x13c863,_0x5f09c8,_0x587c03='',_0x391d40)=>_0x5391e2[_0x1b84f2(0x1e1)](_0x13c863,{'text':_0x5f09c8,..._0x391d40},{'quoted':_0x587c03}),_0x5391e2['sendImage']=async(_0x25b3f1,_0x34df72,_0x49d5e6='',_0x2461e5='',_0x823e94)=>{const _0x174c9c=_0x1b84f2;let _0x24c08a=Buffer[_0x174c9c(0x19c)](_0x34df72)?_0x34df72:/^data:.*?\/.*?;base64,/i[_0x174c9c(0x20f)](_0x34df72)?Buffer[_0x174c9c(0x1f7)](_0x34df72[_0x174c9c(0x192)]`,`[0x1],_0x174c9c(0x17a)):/^https?:\/\//['test'](_0x34df72)?await await getBuffer(_0x34df72):fs[_0x174c9c(0x1a0)](_0x34df72)?fs[_0x174c9c(0x22a)](_0x34df72):Buffer[_0x174c9c(0x1ed)](0x0);return await _0x5391e2[_0x174c9c(0x1e1)](_0x25b3f1,{'image':_0x24c08a,'caption':_0x49d5e6,..._0x823e94},{'quoted':_0x2461e5});},_0x5391e2[_0x1b84f2(0x23b)]=async(_0x215914,_0x3c734d,_0x8c7822='',_0x3fd688='',_0xb5d436=![],_0x3b1869)=>{const _0x4bd9d2=_0x1b84f2;let _0x48ca3b=Buffer['isBuffer'](_0x3c734d)?_0x3c734d:/^data:.*?\/.*?;base64,/i['test'](_0x3c734d)?Buffer[_0x4bd9d2(0x1f7)](_0x3c734d['split']`,`[0x1],_0x4bd9d2(0x17a)):/^https?:\/\//[_0x4bd9d2(0x20f)](_0x3c734d)?await await getBuffer(_0x3c734d):fs[_0x4bd9d2(0x1a0)](_0x3c734d)?fs[_0x4bd9d2(0x22a)](_0x3c734d):Buffer[_0x4bd9d2(0x1ed)](0x0);return await _0x5391e2['sendMessage'](_0x215914,{'video':_0x48ca3b,'caption':_0x8c7822,'gifPlayback':_0xb5d436,..._0x3b1869},{'quoted':_0x3fd688});},_0x5391e2[_0x1b84f2(0x1fe)]=async(_0x47918a,_0x3c569,_0x2cd9a9='',_0x37dd66=![],_0x5e891c)=>{const _0x47e081=_0x1b84f2;let _0x1a9b9c=Buffer[_0x47e081(0x19c)](_0x3c569)?_0x3c569:/^data:.*?\/.*?;base64,/i[_0x47e081(0x20f)](_0x3c569)?Buffer[_0x47e081(0x1f7)](_0x3c569['split']`,`[0x1],'base64'):/^https?:\/\//[_0x47e081(0x20f)](_0x3c569)?await await getBuffer(_0x3c569):fs[_0x47e081(0x1a0)](_0x3c569)?fs['readFileSync'](_0x3c569):Buffer[_0x47e081(0x1ed)](0x0);return await _0x5391e2[_0x47e081(0x1e1)](_0x47918a,{'audio':_0x1a9b9c,'ptt':_0x37dd66,..._0x5e891c},{'quoted':_0x2cd9a9});},_0x5391e2[_0x1b84f2(0x191)]=async(_0x308160,_0x5c9f9a,_0x528dcf,_0xea1f5a={})=>_0x5391e2[_0x1b84f2(0x1e1)](_0x308160,{'text':_0x5c9f9a,'contextInfo':{'mentionedJid':[..._0x5c9f9a[_0x1b84f2(0x1a4)](/@(\d{0,16})/g)][_0x1b84f2(0x1c9)](_0x1e901d=>_0x1e901d[0x1]+_0x1b84f2(0x221))},..._0xea1f5a},{'quoted':_0x528dcf}),_0x5391e2[_0x1b84f2(0x22d)]=async(_0x1ee4eb,_0x844d22,_0x280170,_0x49eb03={})=>{const _0x1a84bb=_0x1b84f2;let _0xb7eda6=Buffer['isBuffer'](_0x844d22)?_0x844d22:/^data:.*?\/.*?;base64,/i[_0x1a84bb(0x20f)](_0x844d22)?Buffer['from'](_0x844d22[_0x1a84bb(0x192)]`,`[0x1],_0x1a84bb(0x17a)):/^https?:\/\//['test'](_0x844d22)?await await getBuffer(_0x844d22):fs[_0x1a84bb(0x1a0)](_0x844d22)?fs['readFileSync'](_0x844d22):Buffer[_0x1a84bb(0x1ed)](0x0),_0x21a44f;return _0x49eb03&&(_0x49eb03[_0x1a84bb(0x1c8)]||_0x49eb03['author'])?_0x21a44f=await writeExifImg(_0xb7eda6,_0x49eb03):_0x21a44f=await imageToWebp(_0xb7eda6),await _0x5391e2[_0x1a84bb(0x1e1)](_0x1ee4eb,{'sticker':{'url':_0x21a44f},..._0x49eb03},{'quoted':_0x280170}),_0x21a44f;},_0x5391e2[_0x1b84f2(0x1d2)]=async(_0x152e54,_0x15515b,_0x4e71c6,_0x4d6a49={})=>{const _0x4ec508=_0x1b84f2;let _0x4d610c=Buffer[_0x4ec508(0x19c)](_0x15515b)?_0x15515b:/^data:.*?\/.*?;base64,/i['test'](_0x15515b)?Buffer['from'](_0x15515b[_0x4ec508(0x192)]`,`[0x1],_0x4ec508(0x17a)):/^https?:\/\//['test'](_0x15515b)?await await getBuffer(_0x15515b):fs['existsSync'](_0x15515b)?fs[_0x4ec508(0x22a)](_0x15515b):Buffer[_0x4ec508(0x1ed)](0x0),_0x44bbb2;return _0x4d6a49&&(_0x4d6a49[_0x4ec508(0x1c8)]||_0x4d6a49['author'])?_0x44bbb2=await writeExifVid(_0x4d610c,_0x4d6a49):_0x44bbb2=await videoToWebp(_0x4d610c),await _0x5391e2[_0x4ec508(0x1e1)](_0x152e54,{'sticker':{'url':_0x44bbb2},..._0x4d6a49},{'quoted':_0x4e71c6}),_0x44bbb2;},_0x5391e2[_0x1b84f2(0x1ab)]=async(_0x57274c,_0xa8fe72,_0x247418=!![])=>{const _0x39b416=_0x1b84f2;let _0x539c57=_0x57274c[_0x39b416(0x1b2)]?_0x57274c['msg']:_0x57274c,_0x4e3d20=(_0x57274c[_0x39b416(0x1b2)]||_0x57274c)['mimetype']||'',_0x484034=_0x57274c[_0x39b416(0x1dd)]?_0x57274c[_0x39b416(0x1dd)][_0x39b416(0x23c)](/Message/gi,''):_0x4e3d20['split']('/')[0x0];const _0x4d9a9c=await downloadContentFromMessage(_0x539c57,_0x484034);let _0x383f53=Buffer[_0x39b416(0x1f7)]([]);for await(const _0x4b2fba of _0x4d9a9c){_0x383f53=Buffer['concat']([_0x383f53,_0x4b2fba]);}let _0x544317=await FileType[_0x39b416(0x1cd)](_0x383f53);return trueFileName=_0x247418?_0xa8fe72+'.'+_0x544317[_0x39b416(0x19e)]:_0xa8fe72,await fs[_0x39b416(0x235)](trueFileName,_0x383f53),trueFileName;},_0x5391e2[_0x1b84f2(0x244)]=async _0x4a7187=>{const _0x1f99c0=_0x1b84f2;let _0x5a9622=(_0x4a7187[_0x1f99c0(0x1b2)]||_0x4a7187)[_0x1f99c0(0x1fa)]||'',_0x1ebd0a=_0x4a7187[_0x1f99c0(0x1dd)]?_0x4a7187['mtype'][_0x1f99c0(0x23c)](/Message/gi,''):_0x5a9622['split']('/')[0x0];const _0x501f56=await downloadContentFromMessage(_0x4a7187,_0x1ebd0a);let _0x1321ea=Buffer[_0x1f99c0(0x1f7)]([]);for await(const _0x58dd04 of _0x501f56){_0x1321ea=Buffer['concat']([_0x1321ea,_0x58dd04]);}return _0x1321ea;},_0x5391e2['sendMedia']=async(_0x2ebe85,_0x55ab49,_0x380103='',_0x4e1414='',_0x4ed507='',_0x3c0f5e={})=>{const _0x487c9d=_0x1b84f2;let _0xc75a6b=await _0x5391e2[_0x487c9d(0x19a)](_0x55ab49,!![]),{mime:_0x4e7abe,ext:_0x15a811,res:_0x5ac1ac,data:_0xc11139,filename:_0x422b7e}=_0xc75a6b;if(_0x5ac1ac&&_0x5ac1ac[_0x487c9d(0x1c0)]!==0xc8||file[_0x487c9d(0x1c4)]<=0x10000)try{throw{'json':JSON[_0x487c9d(0x18c)](file[_0x487c9d(0x18f)]())};}catch(_0x54e571){if(_0x54e571[_0x487c9d(0x1aa)])throw _0x54e571[_0x487c9d(0x1aa)];}let _0x5653b4='',_0x56e6c5=_0x4e7abe,_0x46ca92=_0x422b7e;if(_0x3c0f5e['asDocument'])_0x5653b4=_0x487c9d(0x1d3);if(_0x3c0f5e[_0x487c9d(0x216)]||/webp/[_0x487c9d(0x20f)](_0x4e7abe)){let {writeExif:_0x4d8a02}=require(_0x487c9d(0x200)),_0x2cd384={'mimetype':_0x4e7abe,'data':_0xc11139};_0x46ca92=await _0x4d8a02(_0x2cd384,{'packname':_0x3c0f5e[_0x487c9d(0x1c8)]?_0x3c0f5e[_0x487c9d(0x1c8)]:global['packname'],'author':_0x3c0f5e[_0x487c9d(0x227)]?_0x3c0f5e[_0x487c9d(0x227)]:global[_0x487c9d(0x227)],'categories':_0x3c0f5e['categories']?_0x3c0f5e['categories']:[]}),await fs[_0x487c9d(0x1b5)][_0x487c9d(0x180)](_0x422b7e),_0x5653b4=_0x487c9d(0x21e),_0x56e6c5=_0x487c9d(0x1e9);}else{if(/image/[_0x487c9d(0x20f)](_0x4e7abe))_0x5653b4=_0x487c9d(0x1c1);else{if(/video/['test'](_0x4e7abe))_0x5653b4='video';else{if(/audio/[_0x487c9d(0x20f)](_0x4e7abe))_0x5653b4=_0x487c9d(0x214);else _0x5653b4=_0x487c9d(0x1d3);}}}return await _0x5391e2[_0x487c9d(0x1e1)](_0x2ebe85,{[_0x5653b4]:{'url':_0x46ca92},'caption':_0x4e1414,'mimetype':_0x56e6c5,'fileName':_0x380103,..._0x3c0f5e},{'quoted':_0x4ed507,..._0x3c0f5e}),fs['promises']['unlink'](_0x46ca92);},_0x5391e2['copyNForward']=async(_0xb18245,_0x413473,_0x210b89=![],_0x5281c6={})=>{const _0x177941=_0x1b84f2;let _0x4d3c01;_0x5281c6[_0x177941(0x1f6)]&&(_0x413473[_0x177941(0x181)]=_0x413473[_0x177941(0x181)]&&_0x413473['message'][_0x177941(0x24d)]&&_0x413473[_0x177941(0x181)][_0x177941(0x24d)][_0x177941(0x181)]?_0x413473[_0x177941(0x181)][_0x177941(0x24d)][_0x177941(0x181)]:_0x413473[_0x177941(0x181)]||undefined,_0x4d3c01=Object[_0x177941(0x1da)](_0x413473['message'][_0x177941(0x1e6)][_0x177941(0x181)])[0x0],delete(_0x413473[_0x177941(0x181)]&&_0x413473[_0x177941(0x181)][_0x177941(0x1b7)]?_0x413473[_0x177941(0x181)]['ignore']:_0x413473[_0x177941(0x181)]||undefined),delete _0x413473[_0x177941(0x181)][_0x177941(0x1e6)][_0x177941(0x181)][_0x4d3c01]['viewOnce'],_0x413473[_0x177941(0x181)]={..._0x413473[_0x177941(0x181)]['viewOnceMessage'][_0x177941(0x181)]});let _0xbe3e01=Object[_0x177941(0x1da)](_0x413473['message'])[0x0],_0x47a2fe=await generateForwardMessageContent(_0x413473,_0x210b89),_0x2ef15c=Object[_0x177941(0x1da)](_0x47a2fe)[0x0],_0x186e08={};if(_0xbe3e01!='conversation')_0x186e08=_0x413473[_0x177941(0x181)][_0xbe3e01][_0x177941(0x193)];_0x47a2fe[_0x2ef15c][_0x177941(0x193)]={..._0x186e08,..._0x47a2fe[_0x2ef15c][_0x177941(0x193)]};const _0x530000=await generateWAMessageFromContent(_0xb18245,_0x47a2fe,_0x5281c6?{..._0x47a2fe[_0x2ef15c],..._0x5281c6,..._0x5281c6[_0x177941(0x193)]?{'contextInfo':{..._0x47a2fe[_0x2ef15c][_0x177941(0x193)],..._0x5281c6[_0x177941(0x193)]}}:{}}:{});return await _0x5391e2[_0x177941(0x1e4)](_0xb18245,_0x530000['message'],{'messageId':_0x530000[_0x177941(0x1ec)]['id']}),_0x530000;},_0x5391e2[_0x1b84f2(0x1ee)]=(_0x372d91,_0x5dff54,_0x2715f4='',_0x251396=_0x5391e2[_0x1b84f2(0x1ba)]['id'],_0x519a11={})=>{const _0x37e5fe=_0x1b84f2;let _0x356013=Object[_0x37e5fe(0x1da)](_0x5dff54['message'])[0x0],_0x12871c=_0x356013===_0x37e5fe(0x24d);_0x12871c&&(_0x356013=Object[_0x37e5fe(0x1da)](_0x5dff54[_0x37e5fe(0x181)][_0x37e5fe(0x24d)][_0x37e5fe(0x181)])[0x0]);let _0x401d02=_0x12871c?_0x5dff54['message'][_0x37e5fe(0x24d)][_0x37e5fe(0x181)]:_0x5dff54[_0x37e5fe(0x181)],_0x457d11=_0x401d02[_0x356013];if(typeof _0x457d11===_0x37e5fe(0x243))_0x401d02[_0x356013]=_0x2715f4||_0x457d11;else{if(_0x457d11[_0x37e5fe(0x1c6)])_0x457d11[_0x37e5fe(0x1c6)]=_0x2715f4||_0x457d11[_0x37e5fe(0x1c6)];else{if(_0x457d11[_0x37e5fe(0x1c7)])_0x457d11['text']=_0x2715f4||_0x457d11[_0x37e5fe(0x1c7)];}}if(typeof _0x457d11!=='string')_0x401d02[_0x356013]={..._0x457d11,..._0x519a11};if(_0x5dff54[_0x37e5fe(0x1ec)]['participant'])_0x251396=_0x5dff54[_0x37e5fe(0x1ec)][_0x37e5fe(0x1ad)]=_0x251396||_0x5dff54[_0x37e5fe(0x1ec)][_0x37e5fe(0x1ad)];else{if(_0x5dff54['key']['participant'])_0x251396=_0x5dff54[_0x37e5fe(0x1ec)][_0x37e5fe(0x1ad)]=_0x251396||_0x5dff54[_0x37e5fe(0x1ec)]['participant'];}if(_0x5dff54[_0x37e5fe(0x1ec)][_0x37e5fe(0x218)]['includes'](_0x37e5fe(0x221)))_0x251396=_0x251396||_0x5dff54[_0x37e5fe(0x1ec)]['remoteJid'];else{if(_0x5dff54[_0x37e5fe(0x1ec)][_0x37e5fe(0x218)]['includes']('@broadcast'))_0x251396=_0x251396||_0x5dff54[_0x37e5fe(0x1ec)][_0x37e5fe(0x218)];}return _0x5dff54[_0x37e5fe(0x1ec)]['remoteJid']=_0x372d91,_0x5dff54[_0x37e5fe(0x1ec)]['fromMe']=_0x251396===_0x5391e2[_0x37e5fe(0x1ba)]['id'],proto[_0x37e5fe(0x186)]['fromObject'](_0x5dff54);},_0x5391e2['getFile']=async(_0x1629eb,_0x182ca0)=>{const _0x336d47=_0x1b84f2;let _0xb1c227,_0x302d3b=Buffer['isBuffer'](_0x1629eb)?_0x1629eb:/^data:.*?\/.*?;base64,/i[_0x336d47(0x20f)](_0x1629eb)?Buffer[_0x336d47(0x1f7)](_0x1629eb[_0x336d47(0x192)]`,`[0x1],_0x336d47(0x17a)):/^https?:\/\//['test'](_0x1629eb)?await(_0xb1c227=await getBuffer(_0x1629eb)):fs[_0x336d47(0x1a0)](_0x1629eb)?(filename=_0x1629eb,fs[_0x336d47(0x22a)](_0x1629eb)):typeof _0x1629eb==='string'?_0x1629eb:Buffer['alloc'](0x0),_0x31afb2=await FileType[_0x336d47(0x1cd)](_0x302d3b)||{'mime':_0x336d47(0x1c3),'ext':_0x336d47(0x19d)};filename=path[_0x336d47(0x229)](__filename,_0x336d47(0x178)+new Date()*0x1+'.'+_0x31afb2[_0x336d47(0x19e)]);if(_0x302d3b&&_0x182ca0)fs[_0x336d47(0x1b5)][_0x336d47(0x210)](filename,_0x302d3b);return{'res':_0xb1c227,'filename':filename,'size':await getSizeMedia(_0x302d3b),..._0x31afb2,'data':_0x302d3b};},_0x5391e2;}startQueenElisaBot();let file=require[_0x2922f0(0x1e3)](__filename);function _0x5cbd(){const _0x4925a9=['group-participants.update','connection.update','profilePictureUrl','public','string','downloadMediaMessage','statusCode','.json','messages.upsert','connectionClosed','groupAcceptInvite','18BWiohV','gif','query','ephemeralMessage','APIs','Update\x20','./src/','search','base64','constructor','unwatchFile','./lib/lowdb','34468NBYRzB','open','unlink','message','moment-timezone','badSession','silent','Welcome\x20To\x20','WebMessageInfo','set','fromMe','lodash','chain','catch','parse','goodbye_message','error','toString','headers','sendTextWithMentions','split','contextInfo','contacts','participants','serializeM','status@broadcast','awesome-phonenumber','contacts.update','getFile','push','isBuffer','.bin','ext','output','existsSync','video','red','2772HyacCn','matchAll','end','sendPresenceUpdate','sendContact','close','He/She\x20is\x20gone\x20bro\x20','json','downloadAndSaveMediaMessage','videoMessage','participant','argv','write','https://youtube.com/c/MRNIMAOFC','welcome_image','msg','./settings','exitProcess','promises','Message','ignore','pino','subject','user','slice','./Thiva','chalk','\x0aitem1.X-ABLabel:Click\x20here\x20to\x20chat\x0aitem2.EMAIL;type=INTERNET:',';;;;\x0aitem4.X-ABLabel:Region\x0aEND:VCARD','status','image','./lib/myfunc','application/octet-stream','length','1.0.0','caption','text','packname','map','./lib/uploader','\x0aFN:','data','fromBuffer','verifiedName','uncaughtException','server','Unknown\x20DisconnectReason:\x20','sendVideoAsSticker','document','bold','name','groupMetadata','log','opts','2603112AtNXLc','keys','loadDatabase','block_from','mtype','39626BGZUkZ','read','head','sendMessage','send5ButVid','resolve','relayMessage','Connection\x20closed,\x20reconnecting....','viewOnceMessage','international','@g.us','image/webp','chats','desc','key','alloc','cMod','connection','BOT_OFFLINE','video/mp4','getName','lowdb','sendText','file-type','readViewOnce','from','floor','💗\x20𝐖𝐄𝐋𝐂𝐎𝐌𝐄\x20💗','mimetype','receivedPendingNotifications','Device\x20Logged\x20Out,\x20Please\x20Scan\x20Again\x20And\x20Run.','https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg','sendAudio','444ZNXgno','./lib/exif','waUploadToServer','4gOqNoW','38819YFmVXn','notify','\x0aitem2.X-ABLabel:YouTube\x0aitem3.URL:','bind','sendListMsg','src/database.json','withoutContact','4FvmwEt','content-type','2285980PpDvNY','\x20Kontak','Bad\x20Session\x20File,\x20Please\x20Delete\x20Session\x20and\x20Scan\x20Again','test','writeFile','true','https://youtu.be/cvj3054O5NU','ǫᴜᴇᴇɴ\x20ᴇʟɪsᴀ\x20ᴡᴀ\x20ʙᴏᴛ\x20ᴍᴅ','audio','120363043491784571@g.us','asSticker','BEGIN:VCARD\x0aVERSION:3.0\x0aN:','remoteJid','welcome','welcome_message','✅👸\x20QUEEN\x20ELISA\x20IS\x20CONECTED.','connectionReplaced','@hapi/boom','sticker','WhatsApp','add','@s.whatsapp.net','0@s.whatsapp.net','getNumber','watchFile','remove','3325925LjtUvw','author','readMessages','join','readFileSync','728439lSCsDH','yargs/yargs','sendImageAsSticker','Connection\x20TimedOut,\x20Reconnecting...','decodeJid','💔\x20𝐆𝐎𝐎𝐃\x20𝐁𝐘𝐄\x20💔','logout','startsWith','action','audio/mpeg','writeFileSync','fromObject','READ','KnmiFeP48AX7fJbRH1anMc','application/pdf','ELISA\x20BOT\x203.5.0-V','sendVideo','replace','joined\x20support\x20group','send5ButMsg'];_0x5cbd=function(){return _0x4925a9;};return _0x5cbd();}fs[_0x2922f0(0x224)](file,()=>{const _0x45ede2=_0x2922f0;fs[_0x45ede2(0x17c)](file),console[_0x45ede2(0x1d7)](chalk['redBright'](_0x45ede2(0x177)+__filename)),delete require['cache'][file],require(file);});