<?php

namespace App\Models\Translations;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class PartnerTranslation extends Model
{
    use HasFactory;
    protected $table = "partner_translations";
    public $timestamps = false;

    protected $fillable = [
        'name',
    ];
}
