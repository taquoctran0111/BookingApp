import React, {useState} from "react";
import { useForm} from "react-hook-form";
import "./search.css";
import Select from "react-select";
import DatePicker from "react-datepicker";
import moment from "moment";
import "react-datepicker/dist/react-datepicker.css";



function Search() {
    const [selectedCity, setSelectedCity] = useState(null);
    const [checkIn, setCheckIn] = useState(null);
    const [checkOut, setCheckOut] = useState(null);
    const [man, setMan] = useState(1);
    const [child, setChild] = useState(0);
    const { handleSubmit} = useForm();

    const onSubmit = (data) => {
        console.log(selectedCity.value);
        console.log(moment(checkIn).format("DD/MM/yyyy"));
        console.log(moment(checkOut).format("DD/MM/yyyy"));
        console.log(man);
        console.log(child);
    };

    const options = [
        { value: 'Hà Nội', label: 'Hà Nội' },
        { value: 'Thái Bình', label: 'Thái Bình' },
        { value: 'Hải Phòng', label: 'Hải Phòng' }
    ]
    return(
        <form className="search" onSubmit={handleSubmit(onSubmit)}>
            <Select options={options} className = "city-select" placeholder="Bạn muốn đặt phòng ở đâu?" defaultValue={selectedCity} onChange={setSelectedCity}/>
            <DatePicker
                placeholderText="Ngày nhận phòng"
                selected={checkIn}
                selectsStart
                startDate={checkIn}
                endDate={checkOut}
                onChange={date => setCheckIn(date)}
                className = "date-select"
                wrapperClassName="datePicker"
            />
            <DatePicker
                placeholderText="Ngày trả phòng"
                selected={checkOut}
                selectsEnd
                startDate={checkIn}
                endDate={checkOut}
                minDate={checkIn}
                onChange={date => setCheckOut(date)}
                className = "date-select"
                wrapperClassName="datePicker"
            />
            <input className = "quantity" type="text" name="quatity-man" onChange={e => setMan(e.target.value)} placeholder="Người lớn"/>
            <input className = "quantity" type="text" name="quatity-child" onChange={e => setChild(e.target.value)} placeholder="Trẻ em"/>
            <input type="submit" className="button-search" value="Tìm phòng"/>
        </form>
    );
}

export default Search;