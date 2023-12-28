<template>
    <section class="generator">
        <section class="pass">
            <p>asdhbaklsbfaskl</p>
            <p>icon</p>
        </section>
        <form action="" class="fields">
            <section class="slider">
                <section>
                    <span>Password Lenght</span>
                    <p>10</p>
                </section>
                <input type="range" name="" id="" min="1" max="24">
            </section>

            <section class="checks">
                <label for="">
                    <input type="checkbox" name="" id="">
                    <p>Check 1</p>
                </label>
                <label for="">
                    <input type="checkbox" name="" id="">
                    <p>Check 2</p>
                </label>
                <label for="">
                    <input type="checkbox" name="" id="">
                    <p>Check 3</p>
                </label>
                <label for="">
                    <input type="checkbox" name="" id="">
                    <p>Check 4</p>
                </label>
            </section>
            <section class="strenght">
                <p>strenght</p>
                <p>level</p>
            </section>
            <button>Generate Free Password</button>
        </form>
    </section>
</template>
  
<style scoped>
.generator{
    display: flex;
    flex-direction: column;
    height: fit-content;
    width: 45%;
    row-gap: 0.8rem;
}

.pass, .fields{
    background-color: var(--secondary-bg);
    padding: 1rem;
    height: max-content;
    width: 100%;
    background-color: var(--secondary-bg);
}

.pass{
    display: flex;
    align-items: center;
    justify-content: space-between;
}

.fields{
    display: flex;
    flex-direction: column;
    align-items: stretch;
    justify-content: space-between;
}

.strenght{
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: var(--bg);
    padding: 1rem;
}

.checks{
    padding: 1rem 0;
}

label{
    display: flex;
    column-gap: 0.5rem;
}

button{
    width: 100%;
}


.slider{

    & section{
        display: flex;
        align-items: center;
        justify-content: space-between;
    }
    
    & span{
        font-size: 0.8rem;
        color: var(--secondary-fg);
    }

    & input{
        width: 100%;
    }

    & p{
        font-size: 1.2rem;
        color: var(--main);
    }
}

</style>
  