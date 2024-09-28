const { createApp, ref, watch } = Vue;

const app = createApp({
    setup() {
        const numero = ref(0);
        const title = ref("Jugando con números");

        const incrementar = () => {
            numero.value++;
        };




        const decrementar = () => {
            numero.value--;
        };

        const binario = ref("");
        const valorTexto = ref("");

        const actualizarValores = () => {
            // Actualizar binario
            binario.value = numero.value >= 0 
                ? numero.value.toString(2) 
                : '-' + Math.abs(numero.value).toString(2);

            // Actualizar valor (Positivo, Negativo o 0)
            valorTexto.value = numero.value > 0 
                ? 'POSITIVO' 
                : numero.value < 0 
                    ? 'NEGATIVO' 
                    : '0';
        };

        // Usamos el método watch para actualizar cuando cambia el valor de `numero`
        watch(numero, actualizarValores, { immediate: true });

        return { title, numero, incrementar, decrementar, binario, valorTexto };
    }
});

app.mount("#app");
