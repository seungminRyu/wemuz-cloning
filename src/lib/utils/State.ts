interface State {
    _value: string;
    _textMap: any;
}

class State {
    constructor(state: string) {
        this._value = state;
        this._textMap = {
            scheduled: "예정",
            running: "진행",
            succeeded: "완료",
            failed: "종료",
            cancelled: "취소",
        };
    }

    get value() {
        return this._value;
    }

    get text() {
        return this._textMap[this._value];
    }
}

export class FundingState extends State {
    constructor(state: string) {
        super(state);
        this._textMap = {
            scheduled: "예정",
            running: "진행",
            succeeded: "완료",
            failed: "종료",
            cancelled: "취소",
        };
    }
}

export class PaymentState extends State {
    constructor(state: string) {
        super(state);
        this._textMap = {
            payment_scheduled: "결제 예약",
            payment_schedule_cancelled: "결제 예약 취소",
            payment_completed: "결제 완료",
            payment_fail: "결제 실패",
            payment_refund: "결제 환불",
        };
    }
}
