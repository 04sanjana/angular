import { Component } from '@angular/core';
import { CardsComponent } from "../../ui/cards/cards.component";

@Component({
  selector: 'app-state',
  imports: [CardsComponent],
  templateUrl: './state.component.html',
  styleUrl: './state.component.scss'
})
export class StateComponent {
 

  states = [
    { 
       
          id: 1, 
          name: 'Andhra Pradesh', 
          image: 'https://imgs.search.brave.com/D0dc1reff9XXBL4Ej9zGihsZJAu3uF8-PdXJmBX_pPo/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvY29tbW9ucy90/aHVtYi9mL2ZiL1Zl/bmthdGVzaHdhcmFf/VGlydXBhdGlfVGVt/cGxlLmpwZy81MTJw/eC1WZW5rYXRlc2h3/YXJhX1RpcnVwYXRp/X1RlbXBsZS5qcGc', 
          description: 'Known for its beautiful coastline, rich culture, and diverse heritage, Andhra Pradesh is a state with a blend of modernity and tradition.' 
        },
        { 
          id: 2, 
          name: 'Arunachal Pradesh', 
          image: 'https://imgs.search.brave.com/ewdrfon0zWJp3m7RsHqzE9NoKRNtpLWL0c_gV-4B57U/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9weXQt/YmxvZ3MuaW1naXgu/bmV0LzIwMjAvMDYv/QXNzYW1fU3RhdGVf/TXVzZXVtLmpwZz9h/dXRvPWZvcm1hdCZm/aXQ9c2NhbGUmaD02/OTUmaXhsaWI9cGhw/LTMuMy4wJnc9MTAy/NCZ3cHNpemU9bGFy/Z2U', 
          description: 'Arunachal Pradesh, known as the Land of the Rising Sun, is rich in natural beauty with lush valleys, snow-capped mountains, and vibrant cultures.'
        },
        { 
          id: 3, 
          name: 'Assam', 
          image: 'https://imgs.search.brave.com/Gs_J8ypobSaZLO3kdFWdOT6wkbpVK8rGIKFXob03ts4/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/dHJhd2VsbC5pbi9p/bWFnZXMvcGljcy9i/aWhhcl9hbGxfbWFp/bi5qcGc', 
          description: 'Famous for its tea gardens, wildlife sanctuaries, and the mighty Brahmaputra River, Assam is a state of breathtaking landscapes.'
        },
        { 
          id: 4, 
          name: 'Bihar', 
          image: 'https://imgs.search.brave.com/Gs_J8ypobSaZLO3kdFWdOT6wkbpVK8rGIKFXob03ts4/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/dHJhd2VsbC5pbi9p/bWFnZXMvcGljcy9i/aWhhcl9hbGxfbWFp/bi5qcGc', 
          description: 'Bihar, known for its historical significance, is home to ancient universities, religious sites, and rich cultural traditions.'
        },
        { 
          id: 5, 
          name: 'Chhattisgarh', 
          image: 'https://imgs.search.brave.com/WTYEtY3OQsAHo0z4BC8GnG4mU0mRLGMvifD9l_XCEqM/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly93d3cu/dGhlaW5kaWEuY28u/aW4vYmxvZy93cC1j/b250ZW50L3VwbG9h/ZHMvMjAyNC8wMi9T/aXJwdXItQ2hoYXR0/aXNnYXJoLmpwZw', 
          description: 'Chhattisgarh is known for its vibrant tribal culture, wildlife sanctuaries, and rich history, with stunning waterfalls and dense forests.'
        },
        { 
          id: 6, 
          name: 'Goa', 
          image: 'https://plus.unsplash.com/premium_photo-1697730411634-5313371ad8fe?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8Z29hfGVufDB8fDB8fHww', 
          description: 'Goa is famous for its stunning beaches, vibrant nightlife, and colonial architecture, making it a top tourist destination.'
        },
        { 
          id: 7, 
          name: 'Gujarat', 
          image: 'https://imgs.search.brave.com/iNHRkCBvgad1t4_ef0ks3Q-T0GXnRVuuZL9RY79BtME/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9jMS53/YWxscGFwZXJmbGFy/ZS5jb20vcHJldmll/dy8xNzMvNzc3LzIw/OS9rdXRjaC1ndWph/cmF0LWluZGlhLXBh/bGFjZS5qcGc', 
          description: 'Gujarat is known for its ancient temples, diverse culture, vibrant festivals, and the iconic Rann of Kutch.'
        },
        { 
          id: 8, 
          name: 'Haryana', 
          image: 'https://imgs.search.brave.com/pHvRN1KOzXkGLooHpIVneGrMJF2Otk04Icmh-fB51XU/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly90cmF2/ZWxzZXR1LmNvbS9h/cHBzL3VwbG9hZHMv/bmV3X2Rlc3RpbmF0/aW9uc19waG90b3Mv/ZGVzdGluYXRpb24v/MjAyNC8wMS8wOC8w/MGYxMmJhYzEyM2Nh/MjY5YWJhNDU4OTJk/OGMxYzg2Ml80MDB4/NDAwLmpwZw', 
          description: 'Haryana is known for its rich agricultural heritage, modern cities, and vibrant cultural traditions.'
        },
        { 
          id: 9, 
          name: 'Himachal Pradesh', 
          image: 'https://images.unsplash.com/photo-1716896274923-f22f0f710922?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8aGltYWNoYWwlMjBwcmFkZXNoJTIwaW5kaWF8ZW58MHx8MHx8fDA%3D', 
          description: 'Himachal Pradesh is known for its snow-capped mountains, beautiful valleys, and adventure tourism.'
        },
        { 
          id: 10, 
          name: 'Jharkhand', 
          image: 'https://imgs.search.brave.com/fiGxiBj4ptIwCqpvtG8Dkv1Jir_4IcixDMQfbJGLf6Q/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvY29tbW9ucy9i/L2JjL01hYV9EZXdy/aV9NYW5kaXIuanBn', 
          description: 'Jharkhand is famous for its natural resources, forests, and waterfalls, and is a major hub for mining and industry.'
        },
        { 
          id: 11, 
          name: 'Karnataka', 
          image: 'https://imgs.search.brave.com/ezayhVEEJzRx9u3qRmBgN0nvvSN6_nNfpAvUQX4lIFU/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTIw/NTAzNzI4Ny9waG90/by9rYXVwLWJlYWNo/LWthcm5hdGFrYS5q/cGc_cz02MTJ4NjEy/Jnc9MCZrPTIwJmM9/TUhOS0RRQklLYmRM/WTZKMi1DUlA3TEpC/N3JMSFcyNUd5YUFf/MTRrLUJLRT0', 
          description: 'Karnataka is known for its vibrant culture, historic sites, and diverse landscapes, from beaches to hill stations.'
        },
        { 
          id: 12, 
          name: 'Kerala', 
          image: 'https://imgs.search.brave.com/cK38oObsVs3RWQVmy2F6niSpGHbFAOKwNzCFuk6wLgs/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93YWxs/cGFwZXJjYXZlLmNv/bS93cC93cDI2NDk4/NDEuanBn', 
          description: 'Kerala, often called God’s Own Country, is known for its backwaters, beaches, hill stations, and rich cultural heritage.'
        },
        { 
          id: 13, 
          name: 'Madhya Pradesh', 
          image: 'https://imgs.search.brave.com/pXRZJWS1KZXIwEmkl7-uMAI6wPQ0BxHghL9Db_0sbLM/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jNC53/YWxscGFwZXJmbGFy/ZS5jb20vd2FsbHBh/cGVyLzY2Lzc3OS82/MzMvY2FzdGxlLWlu/ZGlhLXJ1aW5zLW1h/ZGh5YS1wcmFkZXNo/LXdhbGxwYXBlci1w/cmV2aWV3LmpwZw', 
          description: 'Madhya Pradesh is home to historic temples, wildlife sanctuaries, and vibrant cultures.'
        },
        { 
          id: 14, 
          name: 'Maharashtra', 
          image: 'https://imgs.search.brave.com/ZsExqkLK6vBrfvTPus412WB0HeYIYmbfiDWQdqoEh3I/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMTMw/ODc5Njg5Ni9waG90/by9mdWxsLXZpZXct/b2YtcGFkbWF2YXRp/LWxha2UtZnJvbS10/aGUtdG9wLXJhamdh/ZC1mb3J0LXB1bmUt/bWFoYXJhc2h0cmEt/aW5kaWEuanBnP3M9/NjEyeDYxMiZ3PTAm/az0yMCZjPTBjU1Bm/RVNzSFZhdHBhRFNx/RGRuSmhZWm1CV2Rs/WTRlSWYzVXJ0VEFh/bFU9', 
          description: 'Maharashtra is known for its urban development, historical landmarks, and scenic coastlines.'
        },
        { 
          id: 15, 
          name: 'Manipur', 
          image: 'https://imgs.search.brave.com/sH_hgHIWZBJF7dbZwIUtJxsfKRJzkstB4k9NLnkr4u0/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvY29tbW9ucy82/LzY1L0ltcGhhbCxf/TWFuaXB1cl8oNTUp/LmpwZWc', 
          description: 'Manipur is known for its natural beauty, tribal cultures, and the famous Manipuri dance form.'
        },
        { 
          id: 16, 
          name: 'Meghalaya', 
          image: 'https://imgs.search.brave.com/2h7P68cqUi1vPEUG2Jx1I4k9aY43i4njWL2oJQnQcME/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly90My5m/dGNkbi5uZXQvanBn/LzA1LzgxLzc0LzIw/LzM2MF9GXzU4MTc0/MjAyNF9iRHV5UUtn/S2JWUkFSSTFNTzFP/MnVHWjFJemwzaUJt/Ti5qcGc', 
          description: 'Meghalaya is known for its lush green landscapes, waterfalls, and cultural heritage.'
        },
        { 
          id: 17, 
          name: 'Mizoram', 
          image: 'https://imgs.search.brave.com/-Gc1tPa40hcuU6gZHchJmT3rRG2_gzj71IH2mkHvuGE/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/dHJhdmVsZGVhbHNm/aW5kZXIuY29tL3dw/LWNvbnRlbnQvdXBs/b2Fkcy9DaGVyYXct/TWl6by1EYW5jZS5q/cGc', 
          description: 'Mizoram is famous for its scenic beauty, peaceful environment, and tribal traditions.'
        },
        { 
          id: 18, 
          name: 'Nagaland', 
          image: 'https://imgs.search.brave.com/FWuCNb0jKgo7b1vnl8aezF5eHk_O_0laM_YK055PmSI/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9pbWdz/LnNlYXJjaC5icmF2/ZS5jb20vSUVUTlJq/SnQzS0FISEFCZkhP/TF91M1RRdG14N1dE/N21fSnRUZ2Uza1ll/ay9yczpmaXQ6NTYw/OjMyMDoxOjAvZzpj/ZS9hSFIwY0hNNkx5/OXRaV1JwL1lTNW5a/WFIwZVdsdFlXZGwv/Y3k1amIyMHZhV1F2/TkRneC9Oamc0T1Rr/NUwzQm9iM1J2L0wz/UjNieTF1WVdkaExY/UnkvYVdKaGJDMTNi/MjFsYmkxei9iV2xz/YVc1bkxXaHZjbTVp/L2FXeHNMV1psYzNS/cGRtRnMvTFd0dmFH/bHRZUzF1WVdkaC9i/R0Z1WkMxcGJtUnBZ/UzVxL2NHY19jejAy/TVRKNE5qRXkvSm5j/OU1DWnJQVEl3Sm1N/OS9jV0Z4ZUhwQ1Yy/RTVNa2RUL1ZIRkdW/MmhSTlhrelIyeHIv/VXpKUFZFdHdiRFI2/ZUhWcy9WMUI2TWxk/dlZUMA.jpeg', 
          description: 'Nagaland is known for its unique tribal cultures, traditional festivals, and lush landscapes.'
        },
        { 
          id: 19, 
          name: 'Odisha', 
          image: 'https://imgs.search.brave.com/unwd948a8yOz8oENnQVO_KyGf9oTvEzkZPfh62eu5-4/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9lMS5w/eGZ1ZWwuY29tL2Rl/c2t0b3Atd2FsbHBh/cGVyLzIxNy84MjYv/ZGVza3RvcC13YWxs/cGFwZXItYmh1YmFu/ZXN3YXItb2Rpc2hh/LmpwZw', 
          description: 'Odisha is known for its ancient temples, beaches, and vibrant festivals.'
        },
        { 
          id: 20, 
          name: 'Punjab', 
          image: 'https://imgs.search.brave.com/o5FLK38WxSHlX29PIcsOuQYJGUrPyCigU3ksytre4HQ/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9jMC53/YWxscGFwZXJmbGFy/ZS5jb20vcHJldmll/dy80MjMvMTU3LzI3/Ny9nb2xkZW4tdGVt/cGxlLWFtcml0c2Fy/LXB1bmphYi5qcGc', 
          description: 'Punjab is famous for its rich culture, agriculture, and historical landmarks like the Golden Temple.'
        },
        { 
          id: 21, 
          name: 'Rajasthan', 
          image: 'https://imgs.search.brave.com/26BIJD_rI9fHTl3xzEPOmIbIhhLKGLV1403d-iNXIsA/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jMS53/YWxscGFwZXJmbGFy/ZS5jb20vcHJldmll/dy82MTcvNjkyLzEw/MjAvYW1iZXItZm9y/dC1mb3J0LWFtZXIt/amFpcHVyLmpwZw', 
          description: 'Rajasthan is known for its palaces, forts, desert landscapes, and rich history.'
        },
        { 
          id: 22, 
          name: 'Sikkim', 
          image: 'https://imgs.search.brave.com/p4BcE2LizM03zDYCiHOP0H2tlUZhMtEhLfJ7oT8_AeU/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly90NC5m/dGNkbi5uZXQvanBn/LzAzLzMzLzYyLzM5/LzM2MF9GXzMzMzYy/MzkxOV9UWHZESUZz/dWV3b3ppMUFnemZM/OG9iWjBqRGZVVGdq/bi5qcGc', 
          description: 'Sikkim is famous for its pristine nature, monasteries, and breathtaking views of Mount Kanchenjunga.'
        },
        { 
          id: 23, 
          name: 'Tamil Nadu', 
          image: 'https://imgs.search.brave.com/KcsSQ8cqjaM3KpPXGlXE3XdlwOSZrhSqzrmvOOqwOpg/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly93d3cu/Y2x1Ym1haGluZHJh/LmNvbS9ibG9nL21l/ZGlhL3NlY3Rpb25f/aW1hZ2VzL2Zlc3Rp/dmFsc28tYzM2YTg2/NTk1YmJmNGE4Lmpw/Zw', 
          description: 'Tamil Nadu is known for its classical arts, temples, and cultural heritage.'
        },
        { 
          id: 24, 
          name: 'Telangana', 
          image: 'https://imgs.search.brave.com/jOvmKEai6VyF1l6sbWsNfRKpVEP2fd9zk9I0nE3Wyxs/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9pbWdz/LnNlYXJjaC5icmF2/ZS5jb20veElnODQy/RGxIbDgtVEpVekNv/dW5CSmFCVXdCMEEx/c1N3Z01ZazdCU1RG/TS9yczpmaXQ6NTYw/OjMyMDoxOjAvZzpj/ZS9hSFIwY0hNNkx5/OTBOQzVtL2RHTmti/aTV1WlhRdmFuQm4v/THpBNEx6UTFMems1/THpRNS9Mek0yTUY5/R1h6ZzBOVGs1L05E/azVObDkwWldSVU5F/UjQvZW5oSFRuQmtR/elJNTlZkVS9aa0V6/VVdwUVVGUnpTVVZa/L1JTNXFjR2M.jpeg', 
          description: 'Telangana is known for its historical monuments, vibrant culture, and the city of Hyderabad.'
        }
  ]

}
