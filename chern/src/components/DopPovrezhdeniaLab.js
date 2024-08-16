import { useSelector } from 'react-redux';

//Импорт компонентов доп повреждений:
import KrovopodtekOpis from '../povrezhdenia/krovopodtek/KrovopodtekOpis';
import KrovopodtekDiagnoz from '../povrezhdenia/krovopodtek/KrovopodtekDiagnoz';
import KrovopodtekVyvody from '../povrezhdenia/krovopodtek/KrovopodtekVyvody';
import UshibRanaOgrOpis from '../povrezhdenia/ushibRanaOgr/UshibRanaOgrOpis';
import UshibRanaOgrDiagnoz from '../povrezhdenia/ushibRanaOgr/UshibRanaOgrDiagnoz';
import VyvodyUshibRanaOgr from '../povrezhdenia/ushibRanaOgr/VyvodyUshibRanaOgr';
import UshibRanaNoogrOpis from '../povrezhdenia/ushibRanaNoogr/UshibRanaNoogrOpis';
import UshibRanaNoogrDiagnoz from '../povrezhdenia/ushibRanaNoogr/UshibRanaNoogrDiagnoz';
import UshibRanaNoogrVyvody from '../povrezhdenia/ushibRanaNoogr/UshibRanaNoogrVyvody';
import BampPerelomOpis from '../povrezhdenia/bampPerelom/BampPerelomOpis';
import BampPerelomVnutr from '../povrezhdenia/bampPerelom/BampPerelomVnutr';
import BampPerelomLab from '../povrezhdenia/bampPerelom/BampPerelomLab';
import BampPerelomDiagnoz from '../povrezhdenia/bampPerelom/BampPerelomDiagnoz';
import BampPerelomVyvody from '../povrezhdenia/bampPerelom/BampPerelomVyvody';
import SsadinyOpis from '../povrezhdenia/ssadiny/SsadinyOpis';
import SsadinyDiagnoz from '../povrezhdenia/ssadiny/SsadinyDiagnoz';
import SsadinyVyvody from '../povrezhdenia/ssadiny/SsadinyVyvody';
import KrovUprOpis from '../povrezhdenia/krovUpr/KrovUprOpis';
import KrovUprDiagnoz from '../povrezhdenia/krovUpr/KrovUprDiagnoz';
import KrovUprVyvody from '../povrezhdenia/krovUpr/KrovUprVyvody';
import RezanayRanaOpis from '../povrezhdenia/rezanayRana/RezanayRanaOpis';
import RezanayRanaDiagnoz from '../povrezhdenia/rezanayRana/RezanayRanaDiagnoz';
import RezanayRanaVyvody from '../povrezhdenia/rezanayRana/RezanayRanaVyvody';
import UshibVyvody from '../povrezhdenia/UshibVyvody';
import ColotoRezOpis from '../povrezhdenia/colotoRez/ColotoRezOpis';
import ColotoRezVnutr from '../povrezhdenia/colotoRez/ColotoRezVnutr';
import ColotoRezDiagnoz from '../povrezhdenia/colotoRez/ColotoRezDiagnoz';
import ColotoRezVyvody from '../povrezhdenia/colotoRez/ColotoRezVyvody';
import MnogoOpis from '../povrezhdenia/mnogo/MnogoOpis';
import MnogoDiagnoz from '../povrezhdenia/mnogo/MnogoDiagnoz';
import MnogoVyvody from '../povrezhdenia/mnogo/MnogoVyvody';
import OgnestrelMnozhOpis from '../povrezhdenia/ognestrelMnozh/OgnestrelMnozhOpis';
import OgnestrelMnozhVnutr from '../povrezhdenia/ognestrelMnozh/OgnestrelMnozhVnutr';
import OgnestrelMnozhLab from '../povrezhdenia/ognestrelMnozh/OgnestrelMnozhLab';
import OgnestrelMnozhDiagnoz from '../povrezhdenia/ognestrelMnozh/OgnestrelMnozhDiagnoz';
import OgnestrelMnozhVyvody from '../povrezhdenia/ognestrelMnozh/OgnestrelMnozhVyvody';
import OgnestrelOdinOpis from '../povrezhdenia/ognestrelOdin/OgnestrelOdinOpis';
import OgnestrelOdinVnutr from '../povrezhdenia/ognestrelOdin/OgnestrelOdinVnutr';
import OgnestrelOdinDiagnoz from '../povrezhdenia/ognestrelOdin/OgnestrelOdinDiagnoz';
import OgnestrelOdinVyvody from '../povrezhdenia/ognestrelOdin/OgnestrelOdinVyvody';
import ColotayaRanaOpis from '../povrezhdenia/colotayaRana/ColotayaRanaOpis';
import ColotayaRanaVnutr from '../povrezhdenia/colotayaRana/ColotayaRanaVnutr';
import ColotayaRanaDiagnoz from '../povrezhdenia/colotayaRana/ColotayaRanaDiagnoz';
import ColotayaRanaVyvody from '../povrezhdenia/colotayaRana/ColotayaRanaVyvody';
import UshibRanaMkLab from '../povrezhdenia/ushibRanaMk/UshibRanaMkLab';
import UshibRanaMkDiagnoz from '../povrezhdenia/ushibRanaMk/UshibRanaMkDiagnoz';
import UshibRanaMkVyvody from '../povrezhdenia/ushibRanaMk/UshibRanaMkVyvody';
import OzhogiMkOpis from '../povrezhdenia/ozhogiMk/OzhogiMkOpis';
import OzhogiMkLab from '../povrezhdenia/ozhogiMk/OzhogiMkLab';
import OzhogiMkDiagnoz from '../povrezhdenia/ozhogiMk/OzhogiMkDiagnoz';
import OzhogiMkVyvody from '../povrezhdenia/ozhogiMk/OzhogiMkVyvody';
import OzhogPlamenemOpis from '../povrezhdenia/ozhogPlamenem/OzhogPlamenemOpis';
import OzhogPlamenemVnutr from '../povrezhdenia/ozhogPlamenem/OzhogPlamenemVnutr';
import OzhogPlamenemLab from '../povrezhdenia/ozhogPlamenem/OzhogPlamenemLab';
import OzhogPlamenemDiagnoz from '../povrezhdenia/ozhogPlamenem/OzhogPlamenemDiagnoz';
import OzhogPlamenemVyvody from '../povrezhdenia/ozhogPlamenem/OzhogPlamenemVyvody';
import PloskKostjOgrLab from '../povrezhdenia/ploskKostjOgr/PloskKostjOgrLab';
import PloskKostjOgrDiagnoz from '../povrezhdenia/ploskKostjOgr/PloskKostjOgrDiagnoz';
import PloskKostjOgrVyvody from '../povrezhdenia/ploskKostjOgr/PloskKostjOgrVyvody';
import PloskKostjNoogrLab from '../povrezhdenia/ploskKostjNoogr/PloskKostjNoogrLab';
import PloskKostjNoogrDiagnoz from '../povrezhdenia/ploskKostjNoogr/PloskKostjNoogrDiagnoz';
import PloskKostjNoogrVyvody from '../povrezhdenia/ploskKostjNoogr/PloskKostjNoogrVyvody';
import ColotoRezMkLab from '../povrezhdenia/colotoRezMk/ColotoRezMkLab';
import ColotoRezMkDiagnoz from '../povrezhdenia/colotoRezMk/ColotoRezMkDiagnoz';
import ColotoRezMkVyvody from '../povrezhdenia/colotoRezMk/ColotoRezMkVyvody';
import OgnestrelPyaOpis from '../povrezhdenia/ognestrelPya/OgnestrelPyaOpis';
import OgnestrelPyaVnutr from '../povrezhdenia/ognestrelPya/OgnestrelPyaVnutr';
import OgnestrelPyaLab from '../povrezhdenia/ognestrelPya/OgnestrelPyaLab';
import OgnestrelPyaDiagnoz from '../povrezhdenia/ognestrelPya/OgnestrelPyaDiagnoz';
import OgnestrelPyaVyvody from '../povrezhdenia/ognestrelPya/OgnestrelPyaVyvody';

function DopPovrezhdeniaLab() {

    //Получаем из хранилища состояния доп. повреждений:
    const ushibRanaOgr = useSelector((state) => state.dopPovrezhden.ushibRanaOgr);
    const ushibRanaNoogr = useSelector((state) => state.dopPovrezhden.ushibRanaNoogr);
    const bampPerelom = useSelector((state) => state.dopPovrezhden.bampPerelom);
    const krovopodtek = useSelector((state) => state.dopPovrezhden.krovopodtek);
    const ssadiny = useSelector((state) => state.dopPovrezhden.ssadiny);
    const krovUpr = useSelector((state) => state.dopPovrezhden.krovUpr);
    const rezanRana = useSelector((state) => state.dopPovrezhden.rezanRana);
    const ushib = useSelector((state) => state.dopPovrezhden.ushib);
    const colotoRez = useSelector((state) => state.dopPovrezhden.colotoRez);
    const mnogo = useSelector((state) => state.dopPovrezhden.mnogo);
    const ognestrelMnozh = useSelector((state) => state.dopPovrezhden.ognestrelMnozh);
    const ognestrelOdin = useSelector((state) => state.dopPovrezhden.ognestrelOdin);
    const colotayaRana = useSelector((state) => state.dopPovrezhden.colotayaRana);
    const ushibRanaMk = useSelector((state) => state.dopPovrezhden.ushibRanaMk);
    const ozhogiMk = useSelector((state) => state.dopPovrezhden.ozhogiMk);
    const ozhogPlamenem = useSelector((state) => state.dopPovrezhden.ozhogPlamenem);
    const ploskKostjOgr = useSelector((state) => state.dopPovrezhden.ploskKostjOgr);
    const ploskKostjNoogr = useSelector((state) => state.dopPovrezhden.ploskKostjNoogr);
    const colotoRezMk = useSelector((state) => state.dopPovrezhden.colotoRezMk);
    const ognestrelPya = useSelector((state) => state.dopPovrezhden.ognestrelPya);

    return (
        <>
            {/* Ушибл рана и перелом плоской кости (мед крим): */}
            {ushibRanaMk && <UshibRanaMkLab/>}
            {/* Колото-резаное ранение + мед. крим.: */}
            {colotoRezMk && <ColotoRezMkLab/>}
            {/* Огнестрел одиночное ПЯ: */}
            {ognestrelPya && <OgnestrelPyaLab/>}
            {/* Огнестрел множественные: */}
            {ognestrelMnozh && <OgnestrelMnozhLab/>}
            {/* Перелом плоской кости (огр поверхн): */}
            {ploskKostjOgr && <PloskKostjOgrLab/>}
            {/* Перелом плоской кости - мед. крим. (неогр поверхн): */}
            {ploskKostjNoogr && <PloskKostjNoogrLab/>}
            {/* Бампер-перелом: */}
            {bampPerelom && <BampPerelomLab/>}
            {/* Контактные ожоги + мед крим: */}
            {ozhogiMk  && <OzhogiMkLab/>}
            {/* Ожог пламенем: */}
            {ozhogPlamenem  && <OzhogPlamenemLab/>}
        </>
    );
}

export default DopPovrezhdeniaLab;