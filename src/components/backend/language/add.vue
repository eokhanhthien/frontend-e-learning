<template>
    <div class="content">
        <div class="animated fadeIn">
            <button class="btn-add btn btn-primary "> <router-link to ="/language">Trở lại</router-link> </button>

            <div class="row">
                <div class="col-lg-12">
                    <div class="card">
                        <div class="card-header">
                            <strong class="card-title">Thêm ngôn ngữ</strong>
                        </div>
                        <div class="card-body">
                            <!-- Credit Card -->
                            <div id="pay-invoice">
                                <div class="card-body">
                                    <hr>
                                        <div class="form-group">
                                            <label for="cc-payment" class="control-label mb-1">Tên ngôn ngữ</label>
                                            <input id="cc-payment" name="cc-payment" type="text" class="form-control" aria-required="true" aria-invalid="false" value="">
                                        </div>
                                
                                        <div>
                                            <button id="payment-button" type="submit" class="btn btn-lg btn-info btn-block">
                                                <span id="payment-button-amount">Thêm</span>
                                            </button>
                                        </div>
                              
                                </div>
                            </div>

                        </div>
                    </div> <!-- .card -->

                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style>

</style>