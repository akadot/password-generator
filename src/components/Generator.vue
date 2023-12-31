<template>
    <section class="generator">
        <section class="pass">
            <p>{{ password }}</p>
            <font-awesome-icon icon="fa-solid fa-copy" size="lg" id="copy"/>
        </section>
        <form action="" class="fields">
            <section class="slider">
                <section>
                    <span>Password Lenght</span>
                    <p>10</p>
                </section>
                <input type="range" id="slider" min="1" max="24">
            </section>

            <section class="checks">
                <label for="upper">
                    <input type="checkbox" id="upper">
                    <p>Include Uppercase Characters</p>
                </label>
                <label for="lower">
                    <input type="checkbox" id="lower">
                    <p>Include Lowercase Characters</p>
                </label>
                <label for="numbs">
                    <input type="checkbox" id="numbs">
                    <p>Include Numbers</p>
                </label>
                <label for="symbs">
                    <input type="checkbox" id="symbs">
                    <p>Include Symbols</p>
                </label>
            </section>
            <section class="strenght">
                <p>STRENGTH</p>
                <p>level</p>
            </section>
            <button>Generate Free Password</button>
        </form>
    </section>
</template>

<script lang="ts">
export default {
    name:'Generator',
    data(){
        return {
            password:'abc'
        }
    }
}
</script>
  
<style scoped>
.generator {
    display: flex;
    flex-direction: column;
    height: fit-content;
    width: 45%;
    row-gap: 0.8rem;
}

.pass,
.fields {
    background-color: var(--secondary-bg);
    padding: 1rem;
    height: max-content;
    width: 100%;
    background-color: var(--secondary-bg);
}

.pass {
    display: flex;
    align-items: center;
    justify-content: space-between;
}

#copy{
    cursor: pointer;
    color: var(--main);
}

.fields {
    display: flex;
    flex-direction: column;
    align-items: stretch;
    justify-content: space-between;
}

.strenght {
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: var(--bg);
    padding: 1rem;
    color: var(--darker-fg);
}

.checks {
    padding: 1rem 0;
}

label {
    display: flex;
    column-gap: 0.5rem;
}

button {
    width: 100%;
}


.slider {

    & section {
        display: flex;
        align-items: center;
        justify-content: space-between;
    }

    & span {
        font-size: 0.8rem;
        color: var(--secondary-fg);
    }

    & input {
        width: 100%;
    }

    & p {
        font-size: 1.2rem;
        color: var(--main);
    }
}
</style>
  