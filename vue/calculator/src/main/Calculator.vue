<template>
    <div class="calculator">
        <Display :value="displayValue"/>
        <Button label="AC" triple @onButtonClick="clearMemory" />
        <Button label="/" operation @onButtonClick="setOperation" />
        <Button label="7" @onButtonClick="addDigit" />
        <Button label="8" @onButtonClick="addDigit" />
        <Button label="9" @onButtonClick="addDigit" />
        <Button label="*" operation @onButtonClick="setOperation" />
        <Button label="4" @onButtonClick="addDigit" />
        <Button label="5" @onButtonClick="addDigit" />
        <Button label="6" @onButtonClick="addDigit" />
        <Button label="-" operation @onButtonClick="setOperation" />
        <Button label="1" @onButtonClick="addDigit" />
        <Button label="2" @onButtonClick="addDigit" />
        <Button label="3" @onButtonClick="addDigit" />
        <Button label="+" operation @onButtonClick="setOperation" />
        <Button label="0" double @onButtonClick="addDigit" />
        <Button label="." @onButtonClick="addDigit" />
        <Button label="=" operation @onButtonClick="setOperation" />
    </div>
</template>

<script>
import Display from "../components/Display"
import Button from "../components/Button"

export default {
    data: function() {
        return {
            displayValue: "0",
            clearDisplay: false,
            operation: null,
            values: [0, 0],
            current: 0
        }
    },
    components: { Button, Display },
    methods: {
        clearMemory() {
            Object.assign(this.$data, this.$options.data())
        },
        setOperation(operation) {
            if(this.current === 0) {
                this.operation = operation
                this.current = 1
                this.clearDisplay = true
            } else {
                const equals = operation === "="
                const currentOperation = this.operation

                try {
                    this.values[0] = eval(
                        `${this.values[0]} ${currentOperation} ${this.values[1]}`
                    )
                } catch(err) {
                    this.$emit('onError', err)
                }

                this.values[1] = 0
                this.displayValue = this.values[0]
                this.operation = equals ? null : operation
                this.current = equals ? 0 : 1
                this.clearDisplay = !equals
            }
        },
        addDigit(n) {
            if(n === "." && this.displayValue.includes(".")) {
                return
            }
            
            const clearDisplay = this.clearDisplay || this.displayValue === "0"
            const currentValue = clearDisplay ? "" : this.displayValue
            const displayValue = currentValue + n

            this.displayValue = displayValue
            this.clearDisplay = false

            // Alternativa 1:
            this.values[this.current] = displayValue

            // Alternativa 2:
            //if(n !== ".") {
            //    const i = this.current
            //    const newValue = parseFloat(displayValue)
            //    this.values[i] = newValue
            //}
        }
    }
}
</script>

<style>
.calculator {
    height: 320px;
    width: 235px;
    border-radius: 5px;
    overflow: hidden;

    display: grid;
    grid-template-columns: repeat(4,25%);
    grid-template-rows: 1fr 48px 48px 48px 48px 48px;
}
</style>