import 'tippy.js/animations/scale.css';
import 'tippy.js/dist/tippy.css';

// eslint-disable-next-line react/prop-types
const Nav = ({FiPlus,FiBook, HiOutlineRefresh, Tippy}) => {
    return (
        <div
            className="flex sticky top-[0px] items-center bg-white justify-between shadow-md py-[15px] px-[10px]">
            <button
                className="bg-Gray flex gap-[10px] items-center capitalize font-bold p-[10px] rounded-md">
                <FiPlus/>
                <p className="font-Roboto">add customer</p>
            </button>
            <div className="flex gap-[10px] text-[20px]">
                <Tippy
                    content="Add Data"
                    arrow
                    theme="gradient"
                    placement="bottom"
                    arrowType="round"
                    animation="scale">
                    <button className="p-[15px] rounded-md bg-Gray">
                        <FiPlus/>
                    </button>
                </Tippy>
                <Tippy
                    content="Open Book"
                    placement="bottom"
                    arrow
                    arrowType="round"
                    animation="scale">
                    <button className="p-[15px] rounded-md bg-Gray">
                        <FiBook/>
                    </button>
                </Tippy>
                <Tippy
                    content="Refresh Table"
                    placement="bottom"
                    arrowType="round"
                    arrow
                    animation="scale">
                    <button className="p-[15px] rounded-md bg-Gray">
                        <HiOutlineRefresh/>
                    </button>
                </Tippy>
            </div>
        </div>
    )
}

export default Nav