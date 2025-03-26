<script>
import ProductService from '../services/Product.service';

export default {
    data() {
        return {
            productfind: [],
            keyword: ''
        }
    },
    methods: {
        async getDataProductSearch() {
            try {
                // Sử dụng phương thức findProductWithName từ ProductService
                const response = await ProductService.findProductWithName(this.$route.params.name);
                this.productfind = response.data;
                this.keyword = this.$route.params.name;
            } catch (error) {
                console.log(error)
            }
        },
    },
    created() {
        this.getDataProductSearch();
    },
}
</script>

<template>
    <div class="container mt-5" style="margin-left:150px;">
        <h2 class="mb-3">KẾT QUẢ TÌM KIẾM (<span style="color:#62ab00">{{ productfind.length }}</span> kết quả) </h2>
        <h4>Từ khóa: <span style="color:#62ab00;font-size:30px">{{ keyword }}</span> </h4>
        <div class="d-flex row">
            <div class="col-lg-3 mt-4" v-for="item in productfind" :key="item._id">
                <div class="card" style="width: 18rem;" data-aos="flip-up">
                    <img :src="item.productImg[0]" class="card-img-top" alt="..." width="190" height="190"
                        style="object-fit: contain;">
                    <div class="card-body">
                        <span class="card-title" style="height:48px">{{ item.productName }}</span>
                        <p class="card-text"><span class="fw-bold"> Giá bán:</span> <span class="text-danger fw-bold">
                                {{ item.price.toLocaleString() }} đ</span></p>
                        <router-link :to="{
                            name: 'Details',
                            params: { id: item._id },
                        }">
                            <button type="button" class="btn" id="btn_detail">Xem chi tiết</button>
                        </router-link>
                    </div>
                </div>
            </div>

        </div>
    </div>
</template>